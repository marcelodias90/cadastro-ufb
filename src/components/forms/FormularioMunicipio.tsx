import {  useEffect, useState } from "react";
import Municipio from "../../core/Municipio";
import Botao from "../Botao";
import Entrada from "../Entrada";
import Select from "../Select";


interface FormularioMunicipioProps {
    municipio?: Municipio
    municipios: Municipio[]
    municipioMudou?: (municipio: Municipio) => void
    cancelado?: () => void
}

export default function FormularioMunicipio(props: FormularioMunicipioProps) {
    const id = props.municipio?.id

    const [nome, setNome] = useState('' as string)
    const [estado, setEstado] = useState('' as string)
    const [estados, setEstados] = useState<Municipio[]>([Municipio.vazio()])

    useEffect(() => {
        
        setNome(props?.municipio?.nome ?? '');
        setEstado(props?.municipio?.estado?? '');
        setEstados(props?.municipios)
    }, [props]);

    function exibirSelect() {

        function ordenarNome(a, b){
            let x = a.uf.nomeUf.toUpperCase(),
                y = b.uf.nomeUf.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1
        }
        return estados.sort(ordenarNome).map((estado) => { 
            return (
                <option key={estado.id} value={estado.id} className="text-center ">{estado.uf.nomeUf} - {estado.uf.sigla}</option>
            )
        })
    }

    return (
        <>
            <div className={`bg-red-300 w-2/5 rounded-md border-8 shadow-2xl ml-10 mr-10`}>
                <Entrada texto="Código" somenteLeitura valor={id} />
                <Entrada texto="Nome" valor={nome} valorMudou={setNome}/>
                <Select id="lista-estados" valor={estado} texto="Estado" onChange={setEstado}>{exibirSelect()}</Select>
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2">
                        {props.municipio?.id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao cor="gray" >
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}