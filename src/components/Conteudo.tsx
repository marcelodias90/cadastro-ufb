
interface ConteudoProps {
    children?: any
}

export default function Conteudo(props: ConteudoProps) {
    return (
        <div className={`flex flex-row mt-12`}>
            {props.children}
        </div>
    )
}