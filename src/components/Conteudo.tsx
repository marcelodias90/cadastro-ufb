
interface ConteudoProps {
    children?: any
    className?: string
    texto?: string
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`flex  mt-12 ${props.className}`}>
            {props.children}
            
        </div>
    )
}