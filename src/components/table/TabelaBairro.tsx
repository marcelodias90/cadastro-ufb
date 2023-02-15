import Bairro from "../../core/models/Bairro"
import BotaoAcoes from "../BotaoAcoes"
import { IconeAlterar, IconeExcluir } from "../icons"

interface TabelaBairroProps{
    bairros: Bairro[]
    bairroSelecionado?: (bairro: Bairro) => void
    bairroExcluido?: (bairro: Bairro) => void
}

export default function TabelaBairro(props: TabelaBairroProps) {

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Município</th>
                <th className="text-left p-4">Estado</th>
                <th className="text-left p-4">Ações</th>
            </tr>
        )
    }   

    function renderizarDados(){
        return props.bairros?.map((bairro, i)=>{
            return(
                <tr key={bairro.id} className={`${i % 2 === 0 ? 'bg-green-200' : 'bg-green-100'}`}>
                    <td className="text-left p-4">{bairro.id}</td>
                    <td className="text-left p-4">{bairro.nome}</td>
                    <td className="text-left p-4">{bairro.municipio.nome}</td>
                    <td className="text-left p-4">{bairro.municipio.uf.nomeUf}</td>
                    {renderizarAcoes(bairro)}
                </tr>
            )
        })
    }

    function renderizarAcoes(bairro: Bairro){
        return (
            <td className="flex justify-center">
                <BotaoAcoes cor="green" onClick={() => props.bairroSelecionado?.(bairro)}>
                    {IconeAlterar}
                </BotaoAcoes>
                <BotaoAcoes cor="red" onClick={() => props.bairroExcluido?.(bairro)}>
                    {IconeExcluir}
                </BotaoAcoes>
            </td>
        )
    }

    return(
        <div className=" overflow-auto max-h-96 w-3/6 shadow-2xl  border-8 border-green-200">
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