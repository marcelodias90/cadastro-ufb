
import { useEffect, useState } from "react";
import Bairro from "../../core/models/Bairro";
import Municipio from "../../core/models/Municipio";
import Uf from "../../core/models/Uf";
import services from "../../core/services/service";
import { validarCamposNome } from "../../core/settings/ufsettings";
import Botao from "../Botao";
import Entrada from "../Entrada";
import Select from "../Select";

interface FormularioBairroProps {
    estados: Uf[]
    municipios: Municipio[]
    bairro: Bairro
    bairroMudou?: (bairro: Bairro) => void
    cancelado?: () => void
}

export default function FormularioBairro(props: FormularioBairroProps) {
    const id = props.bairro?.id

    const [nome, setNome] = useState('' as string)
    const [estados, setEstados] = useState<Uf[]>([Uf.vazio()])
    const [estado, setEstado] = useState<Uf>(Uf.vazio())
    const [municipio, setMunicipio] = useState<Municipio>(Municipio.vazio())
    const [municipios, setMunicipios] = useState<Municipio[]>([Municipio.vazio()])

    useEffect(() => {
        setNome(props?.bairro?.nome ?? '');
        setEstados(props?.estados ?? []);
        setEstado(props?.bairro.municipio.uf ?? Uf.vazio());
        setMunicipio(props?.bairro?.municipio ?? Municipio.vazio());
        setMunicipios(props?.municipios ?? []);
    }, [props])

    const handleChangeEstado = event => {
        const selectdId = event
        const selectedOption = estados.find(estado => estado.id === selectdId)
        setEstado(selectedOption)
    }
    const handleChangeMunicipio = event => {
        const selectdId = event
        const selectedOption = municipios.find(municipio => municipio.id === selectdId)
        setMunicipio(selectedOption)
    }

    function exibirSelectEstado() {
        return estados.sort(services.ordenarNomeUf).map((estado, i) => {
            return (
                <option key={estado.id} value={estado.id} className="text-center">{estado.nomeUf} - {estado.sigla}</option>
            )
        })
    }

    function exibirSelectMunicipio() {
        if(services.isEmpty(estado) || id){  
            return municipios.sort(services.ordenarNome).map((municipio, i) => {
            if(estado.id === municipio.uf.id){
                return (
                    <option key={municipio.id} value={municipio.id} className="text-center">{municipio.nome}</option>
                )
            } else{
                return false
            }
        })
        } else{
            return false
        }
    }

    return (
        <>
            <div className={`bg-green-300 w-2/5 rounded-md border-8 border-gray-300 shadow-2xl ml-10 mr-10`}>
                
                <Select id="estados" valor={estado.id} texto="Estado"  onChange={handleChangeEstado} selectText="Estado">
                    {exibirSelectEstado()}
                </Select>
                <Select id="municipios" valor={municipio.id} texto="Município" onChange={handleChangeMunicipio} selectText="Município">
                    {exibirSelectMunicipio()}
                </Select>
                <Entrada id="nome" texto="Bairro" nameSpan="span" 
                            menssage="* Infome o nome do Bairro" validar={validarCamposNome}
                            valor={nome} valorMudou={setNome}/>
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2"
                        onClick={() => props.bairroMudou?.(new Bairro(nome, municipio, id)) } >
                        {props.bairro?.id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao cor="gray" onClick={props.cancelado} >
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}