import Uf from "../../core/models/Uf"
import BotaoAcoes from "../BotaoAcoes"
import { IconeAlterar, IconeExcluir } from "../icons"
import services from "../../core/services/service"

interface TabelaUfProps {
    ufs: Uf[]
    ufSelecionado?: (uf: Uf) => void
    ufExcluido?: (uf: Uf) => void
}

export default function TabelaUf(props: TabelaUfProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Sigla</th>
                <th className="text-center p-4">Ações</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.ufs?.sort(services.ordenarNomeUf).map((uf, i) => {
            return (
                <tr key={uf.id} className={`${i % 2 === 0 ? 'bg-blue-200' : 'bg-blue-100'}`}>
                    <td className="text-left p-4">{uf.id}</td>
                    <td className="text-left p-4">{uf.nomeUf}</td>
                    <td className="text-left p-4">{uf.sigla}</td>
                    {renderizarAcoes(uf)}
                </tr>
            )
        })
    }

    function renderizarAcoes(uf: Uf){
        return (
            <td className="flex justify-center">
                <BotaoAcoes cor="green" onClick={() => props.ufSelecionado?.(uf)}>
                    {IconeAlterar}
                </BotaoAcoes>
                <BotaoAcoes cor="red" onClick={() => props.ufExcluido?.(uf)}>
                    {IconeExcluir}
                </BotaoAcoes>
            </td>
        )
    }

    return (
        <div className=" overflow-auto max-h-96 w-3/6 shadow-2xl border-8 border-gray-300">
            <table className=" w-full ">
                <thead className=" sticky top-0 bg-gray-100">
                    {renderizarCabecalho()}
                </thead>
                <tbody>
                    {renderizarDados()}
                </tbody>
            </table>
        </div>

    )
}
