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
            <div className="group  ml-3 flex items-center justify-start">
                <div className=" group-hover:scale-125">
                {props.icone}
                </div>
                <span className={`font-${font} text-1xl text-gray-800  flex m-5 group-hover:scale-105`}>
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