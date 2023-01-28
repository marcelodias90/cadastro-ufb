import { useState } from "react";
import Uf from "../../core/Uf";
import Botao from "../Botao";
import Entrada from "../Entrada";

interface FormularioUfProps {
    uf: Uf
    ufMudou?: (uf: Uf) => void
    cancelado?: () => void
}

export default function FormularioUf(props: FormularioUfProps) {
    const id = props.uf?.id
        
    const [nomeUf, setNomeUf] = useState(props.uf?.nomeUf?? '')
    const [sigla, setSigla] = useState(props.uf?.sigla?? '')
    
    return (
        <div className={`
            bg-blue-200   w-2/5  rounded-md border-8 shadow-2xl ml-10 mr-10 
        `}  >
            {id? (
                <Entrada texto="Código" somenteLeitura valor={id} />
            ) : false}
            <Entrada texto="Nome "  valor={nomeUf}  valorMudou={setNomeUf} />
            <Entrada texto="Sigla "  valor={sigla}  valorMudou={setSigla}/>
            <div className="flex items-end justify-end m-3 ">
                <Botao cor={`${id? 'green' : 'blue'}`} className="mr-2" onClick={() => props.ufMudou?.(new Uf(nomeUf, sigla, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray" onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}