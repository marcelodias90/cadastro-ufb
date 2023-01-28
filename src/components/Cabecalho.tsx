import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div className="mt-32 ml-40">
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}