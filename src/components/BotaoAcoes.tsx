
interface BotaoAcoesProps {
    cor: 'red' | 'green'
    children: any
    onClick?: (e: any) => void
}

export default function BotaoAcoes(props: BotaoAcoesProps) {
    return (
        <button className={`
            flex justify-center items-center text-${props.cor}-600 rounded-full p-2 m-1 hover:bg-blue-50
        `} onClick={props.onClick}>
            {props.children}
        </button>
    )
}