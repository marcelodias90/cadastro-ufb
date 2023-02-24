import Endereco from "../../core/models/Endereco"
import BotaoAcoes from "../BotaoAcoes"
import { IconeAlterar, IconeExcluir } from "../icons"

interface TabelaEnderecoProps {
    enderecos: Endereco[]
    enderecoSelecionado?: (endereco: Endereco) => void
    enderecoExcluido?: (endereco: Endereco) => void
}

export default function TabelaEndereco(props: TabelaEnderecoProps){

    function renderizarCabecalho(){
        return(
            <tr>
                <th className="text-left p-4">Rua</th>
                <th className="text-left p-4">Número</th>
                <th className="text-left p-4">Bairro</th>
                <th className="text-left p-4">Município</th>
                <th className="text-left p-4">Estado</th>
                <th className="text-left p-4">Pessoa</th>
                <th className="text-left p-4">Ações</th>
            </tr>
        )
    }
    
    function renderizarDados(){
        return props.enderecos?.map((endereco, i)=>{
            return(
                <tr key={endereco.id} className={`${i % 2 === 0 ? 'bg-zinc-300' : 'bg-zinc-200'}`}>
                    <td className="text-left p-4">{endereco.rua}</td>
                    <td className="text-left p-4">{endereco.numero}</td>
                    <td className="text-left p-4">{endereco.bairro.nome}</td>
                    <td className="text-left p-4">{endereco.bairro.municipio.nome}</td>
                    <td className="text-left p-4">{endereco.bairro.municipio.uf.sigla}</td>
                    <td className="text-left p-4">{endereco.pessoa.nome}</td>
                    {renderizarAcoes(endereco)}
                </tr>
            )
        })
    }

    function renderizarAcoes(endereco: Endereco){
        return (
            <td className="flex justify-center">
                <BotaoAcoes cor="green" onClick={() => props.enderecoSelecionado?.(endereco)}>
                    {IconeAlterar}
                </BotaoAcoes>
                <BotaoAcoes cor="red" onClick={() => props.enderecoExcluido?.(endereco)}>
                    {IconeExcluir}
                </BotaoAcoes>
            </td>
        )
    }


    return(
        <div className=" overflow-auto max-h-96 w-3/6 shadow-2xl  border-8 border-zinc-200">
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