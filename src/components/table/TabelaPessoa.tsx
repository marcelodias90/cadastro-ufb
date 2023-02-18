import Pessoa from "../../core/models/Pessoa"
import BotaoAcoes from "../BotaoAcoes"
import { IconeAlterar, IconeExcluir, IconeSetaBaixo } from "../icons"

interface TabelaPessoaProps {
    pessoas: Pessoa[]
    pessoaSelecionada?: (pessoa: Pessoa) => void
    pessoaExcluido?: (pessoa: Pessoa) => void
}


export default function TabelaPessoa(props: TabelaPessoaProps) {


    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Sobrenome</th>
                <th className="text-left p-4">Idade</th>
                <th className="text-left p-4">Login</th>
                <th className="text-center p-4">Ações</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.pessoas?.map((pessoa, i) => {
            return (
                <>
                    <tr key={pessoa.id} className={`${i % 2 === 0 ? 'bg-teal-200' : 'bg-teal-100'}`}>
                        <td className="text-left p-4">{pessoa.nome}</td>
                        <td className="text-left p-4">{pessoa.sobrenome}</td>
                        <td className="text-left p-4">{pessoa.idade}</td>
                        <td className="text-left p-4">{pessoa.login}</td>
                        {renderizarAcoes(pessoa)}


                    </tr>
                    
                        {renderizarEndereco()}

                   

                </>

            )
        })
    }

    function renderizarDadosEndereco() {



        return (
            <tr >
                <td className="text-left p-4">Um</td>
                <td className="text-left p-4">5</td>
                <td className="text-left p-4">hawai</td>
                <td className="text-left p-4">ribeirao das neves</td>
                <td className="text-left p-4">Mg</td>
            </tr>

        )


    }

    function renderizarEndereco() {



        return (
            <td className=" hidden">
                <table>
                    <thead>
                        <tr>
                            <th className="text-left p-4">rua</th>
                            <th className="text-left p-4">numero</th>
                            <th className="text-left p-4">bairro</th>
                            <th className="text-left p-4">municipio</th>
                            <th className="text-center p-4">sigla</th>
                        </tr>

                    </thead>
                    <tbody>
                        {renderizarDadosEndereco()}
                    </tbody>
                </table>
            </td>










        )

    }

    function renderizarAcoes(pessoa: Pessoa) {
        return (
            <td className="flex justify-center">
                <BotaoAcoes cor="green" onClick={() => props.pessoaSelecionada?.(pessoa)}>
                    {IconeAlterar}
                </BotaoAcoes>
                <BotaoAcoes cor="red" onClick={() => props.pessoaExcluido?.(pessoa)}>
                    {IconeExcluir}
                </BotaoAcoes>

                <BotaoAcoes cor="blue" onClick={() => renderizarEndereco?.()}>
                    {IconeSetaBaixo}
                </BotaoAcoes>

            </td>
        )
    }

    return (
        <div className=" overflow-auto max-h-96 w-3/6 shadow-2xl  border-8 border-teal-200">
            <table className="w-full">
                <thead>
                    {renderizarCabecalho()}
                </thead>
                <tbody>
                    {renderizarDados()}
                </tbody>

            </table>
        </div>
    )
}