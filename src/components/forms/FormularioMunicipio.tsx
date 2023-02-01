import {  useEffect, useState } from "react";
import Municipio from "../../core/Municipio";
import Uf from "../../core/Uf";
import Botao from "../Botao";
import Entrada from "../Entrada";
import Select from "../Select";


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
        setUfs(props?.estados?? [])
    }, [props]);

    function exibirSelect() {

        function ordenarNome(a, b){
            let x = a.nomeUf.toUpperCase();
            let y = b.nomeUf.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1
        }
        return ufs?.sort(ordenarNome).map((uf, i) => { 
            return (
                <option key={uf.id} value={uf.nomeUf} className="text-center ">{uf.nomeUf} - {uf.sigla}</option>
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