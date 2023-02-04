import Municipio from "../../core/models/Municipio"
import BotaoAcoes from "../BotaoAcoes"
import { IconeAlterar, IconeExcluir } from "../icons"
import services from "../../core/services/service"

interface TabelaMunicipioProps {
    municipios: Municipio[]
    municipioSelecionado?: (municipio: Municipio) => void
    municipioExcluido?: (municipio: Municipio) => void
}

export default function TabelaMunicipio(props: TabelaMunicipioProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Estado</th>
                <th className="text-center p-4">Ações</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.municipios?.sort(services.ordenarEstado).map((municipio, i) => {
            return (
                <tr key={municipio.id} className={`${i % 2 === 0 ? 'bg-red-200' : 'bg-red-100'}`}>
                    <td className="text-left p-4">{municipio.id}</td>
                    <td className="text-left p-4">{municipio.nome}</td>
                    <td className="text-left p-4">{municipio.estado}</td>
                    {renderizarAcoes(municipio)}
                </tr>
            )
        })
    }

    function renderizarAcoes(municipio: Municipio) {
        return (
            <td className="flex justify-center">
                <BotaoAcoes cor="green" onClick={() => props.municipioSelecionado?.(municipio)}>
                    {IconeAlterar}
                </BotaoAcoes>
                <BotaoAcoes cor="red" onClick={() => props.municipioExcluido?.(municipio)}>
                    {IconeExcluir}
                </BotaoAcoes>
            </td>
        )
    }

    return (

        <div className=" overflow-auto max-h-96 w-3/6 shadow-2xl  border-8">
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