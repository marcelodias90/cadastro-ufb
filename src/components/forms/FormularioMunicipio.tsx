import { useEffect, useState } from "react";
import Municipio from "../../core/models/Municipio";
import Uf from "../../core/models/Uf";
import Botao from "../Botao";
import Entrada from "../Entrada";
import Select from "../Select";
import services from "../../core/services/service";
import { validarCamposNome } from "../../core/settings/ufsettings";


interface FormularioMunicipioProps {
    estados: Uf[]
    uf: Uf
    municipio: Municipio
    municipios: Municipio[]
    municipioMudou?: (municipio: Municipio) => void
    cancelado?: () => void
}

export default function FormularioMunicipio(props: FormularioMunicipioProps) {
    const id = props.municipio?.id


    const [nome, setNome] = useState('' as string)
    const [ufs, setUfs] = useState<Uf[]>([Uf.vazio()])
    const [uf, setUf] = useState<Uf>(Uf.vazio())

    useEffect(() => {

        setNome(props?.municipio?.nome ?? '');
        setUf(props?.uf ?? Uf.vazio())
        setUfs(props?.estados ?? [])
    }, [props]);

    function exibirSelect() {

        return ufs?.sort(services.ordenarNomeUf).map((uf, i) => {
               
                return (
                    <option key={uf.id} value={JSON.stringify(uf)} className="text-center "  >{uf.nomeUf} - {uf.sigla}</option>
                )
            }
        )
    }
    

    return (
            <>
                <div className={`bg-red-300 w-2/5 rounded-md border-8 shadow-2xl ml-10 mr-10`}>
                    <Entrada id="codigo" texto="Código" somenteLeitura valor={id} />
                    <Entrada nameSpan="span"
                        menssage="* Informe o nome do Município" validar={validarCamposNome}
                        id="nome" texto="Município" valor={nome} valorMudou={setNome}
                    />
                    <Select id="estados" valor={JSON.stringify(uf)} texto="Estado" onChange={setUf}>
                        {exibirSelect()}
                    </Select>
                    <div className="flex items-end justify-end m-3 ">
                        <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2" onClick={() => props.municipioMudou?.(new Municipio(nome, uf, id))} >
                            {props.municipio?.id ? 'Alterar' : 'Salvar'}
                        </Botao>
                        <Botao cor="gray" onClick={props.cancelado}>
                            Cancelar
                        </Botao>
                    </div>
                </div>
            </>
        )
    }