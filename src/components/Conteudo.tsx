
interface ConteudoProps {
    children?: any
    className?: string
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`flex flex-row mt-12 ${props.className}`}>
            {props.children}
        </div>
    )
}