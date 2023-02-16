import { useEffect, useState } from "react"
import Pessoa from "../../core/models/Pessoa"
import Botao from "../Botao"
import Entrada from "../Entrada"

interface FormularioPessoaProps {
    pessoa: Pessoa
    pessoaMudou?: (pessoa: Pessoa) => void
    cancelado?: () => void
}

export default function FormularioPessoa(props: FormularioPessoaProps) {
    const id = props.pessoa?.id

    const [nome, setNome] = useState('' as string)
    const [sobrenome, setSobrenome] = useState('' as string)
    const [idade, setIdade] = useState(null as number)
    const [login, setLogin] = useState('' as string)
    const [senha, setSenha] = useState('' as string)

    useEffect(() => {
        setNome(props?.pessoa?.nome ?? '')
        setSobrenome(props?.pessoa?.sobrenome ?? '')
        setIdade(props?.pessoa?.idade ?? null)
        setLogin(props?.pessoa?.login ?? '')
        setSenha(props?.pessoa?.senha ?? '')
    }, [props])

    return (
        <>
            <div className={`bg-teal-200 w-2/5 rounded-md border-8 border-teal-200 shadow-2xl ml-10 mr-10`}>
                
                    <Entrada id="nome" texto="Nome" tamanho="2" />
                    <Entrada id="sobrenome" texto="Sobrenome" tamanho="2" />
                
                <div className=" w-2/4">
                    <Entrada id="idade" texto="Idade" tipo="number" tamanho="2" />
                </div>
                <div className="flex">
                    <Entrada id="login" texto="Login" tamanho="2" />
                    <Entrada id="senha" texto="Senha" tipo="password" tamanho="2" />
                </div>
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2">
                        {props.pessoa?.id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao cor="gray">
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}