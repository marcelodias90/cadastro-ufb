import Titulo from "./Titulo"

interface CabecalhoProps {
    titulo: string
    subtitulo: string
    className?: string
}

export default function Cabecalho(props: CabecalhoProps) {
    return (
        <div className={`mt-32 ml-40 ${props.className}`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
        </div>
    )
}