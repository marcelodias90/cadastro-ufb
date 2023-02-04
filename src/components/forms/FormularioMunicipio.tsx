import { useEffect, useState } from "react";
import Municipio from "../../core/models/Municipio";
import Uf from "../../core/models/Uf";
import Botao from "../Botao";
import Entrada from "../Entrada";
import Select from "../Select";
import services from "../../core/services/service";
import { validarCamposNome, validarCamposEstado } from "../../core/settings/ufsettings";


interface FormularioMunicipioProps {
    estados: Uf[]
    municipio: Municipio
    municipios: Municipio[]
    municipioMudou?: (municipio: Municipio) => void
    cancelado?: () => void
}

export default function FormularioMunicipio(props: FormularioMunicipioProps) {
    const id = props.municipio?.id


    const [nome, setNome] = useState('' as string)
    const [estado, setEstado] = useState('' as string)
    const [ufs, setUfs] = useState<Uf[]>([Uf.vazio()])

    useEffect(() => {

        setNome(props?.municipio?.nome ?? '');
        setEstado(props?.municipio?.estado ?? '');
        setUfs(props?.estados ?? [])
    }, [props]);

    function exibirSelect() {
        return ufs?.sort(services.ordenarNomeUf).map((uf, i) => {
            return (
                <option key={uf.id} value={uf.nomeUf} className="text-center ">{uf.nomeUf} - {uf.sigla}</option>
            )
        })
    }

    return (
        <>
            <div className={`bg-red-300 w-2/5 rounded-md border-8 shadow-2xl ml-10 mr-10`}>
                <Entrada id="codigo" texto="Código" somenteLeitura valor={id} />
                <Entrada nameSpan="span"
                    menssage="* Informe o nome do Município" validar={validarCamposNome}
                    id="nome" texto="Nome" valor={nome} valorMudou={setNome}
                />
                <Select id="estados" valor={estado} texto="Estado" onChange={setEstado}>
                    {exibirSelect()}
                </Select>
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2" onClick={() => props.municipioMudou?.(new Municipio(nome, estado, id))} >
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