import { useEffect, useState } from "react";
import Bairro from "../../core/models/Bairro";
import Municipio from "../../core/models/Municipio";
import Uf from "../../core/models/Uf";
import services from "../../core/services/service";
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
    const [municipio, setMunicipio] = useState('' as string)
    const [municipios, setMunicipios] = useState<Municipio[]>([Municipio.vazio()])

    useEffect(() => {
        setNome(props?.bairro?.nome ?? '');
        setEstados(props?.estados ?? []);
        setMunicipio(props?.bairro?.municipio.nome ?? '');
        setMunicipios(props?.municipios ?? []);
    })

    function exibirSelectEstado() {
        return estados.sort(services.ordenarNomeUf).map((estado, i) => {
            return (
                <option key={estado.id} value={estado.nomeUf} className="text-center">{estado.nomeUf}</option>
            )
        })
    }

    function exibirSelectMunicipio() {
        return municipios.sort(services.ordenarNome).map((municipio, i) => {
            return (
                <option key={municipio.id} value={municipio.nome} className="text-center">{municipio.nome}</option>
            )
        })
    }

    return (
        <>
            <div className={`bg-green-300 w-2/5 rounded-md border-8 shadow-2xl ml-10 mr-10`}>
                <Entrada id="codigo" texto="Código" somenteLeitura valor="" />
                <Select id="estados" valor="estados" texto="Estado">
                    {exibirSelectEstado()}
                </Select>
                <Select id="municipios" valor="municipios" texto="Município">
                    {exibirSelectMunicipio()}
                </Select>
                <Entrada id="nome" texto="Bairro" />
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2"
                        onClick={() => props.bairroMudou} >
                        {props.bairro?.id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao cor="gray" >
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}