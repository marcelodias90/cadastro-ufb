import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone?: any
    className?: string
    onClick?: (evento: any) => void
    
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink(){
        const font = props.className? "black" : "dark"
        return(
            <div className="ml-3 flex items-center justify-start">
                {props.icone}
                <span className={`font-${font} text-1xl text-gray-800  flex m-5`}>
                    {props.texto}
                </span>
            </div>
        )
    }
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-50 cursor-pointer`}>
            {props.url ? (
            <Link href={props.url}>
                {renderizarLink()}
            </Link>
            ) : renderizarLink() }
        </li>
    )
}