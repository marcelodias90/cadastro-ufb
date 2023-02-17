
interface BotaoAcoesProps {
    cor: 'red' | 'green' | 'blue'
    children: any
    onClick?: (e: any) => void
    
}

export default function BotaoAcoes(props: BotaoAcoesProps) {
    return (
        <button className={`
            flex justify-center items-center text-${props.cor}-600 rounded-full p-2 ml-1 hover:bg-blue-50
        `} onClick={props.onClick} >
            {props.children}
        </button>
    )
}