import { useEffect, useState } from "react";
import Uf from "../../core/models/Uf";
import Botao from "../Botao";
import Entrada from "../Entrada";

interface FormularioUfProps {
    uf: Uf
    ufMudou?: (uf: Uf) => void
    cancelado?: () => void
}

export default function FormularioUf(props: FormularioUfProps) {

    const id = props.uf?.id

    const [nomeUf, setNomeUf] = useState('' as string)
    const [sigla, setSigla] = useState('' as string)

    useEffect(() => {
        setNomeUf(props?.uf?.nomeUf ?? '');
        setSigla(props?.uf?.sigla ?? '');
    }, [props]);

    return (
        <>
            <div className={`bg-blue-200 w-2/5 rounded-md border-8 shadow-2xl ml-10 mr-10`}>
                {id ? (
                    <Entrada texto="Código" somenteLeitura valor={id} />
                ) : false}
                <Entrada texto="Nome" tipo="text" valor={nomeUf} valorMudou={setNomeUf} obrigatorio/>
                <Entrada texto="Sigla " valor={sigla} valorMudou={setSigla} obrigatorio/>
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2" onClick={() => props.ufMudou?.(new Uf(nomeUf, sigla, id))}>
                        {props.uf?.id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao cor="gray" onClick={props.cancelado}>
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}
