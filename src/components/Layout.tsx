import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Footer from "./Footer"
import MenuLateral from "./MenuLateral"


interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
    className?: string
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`flex flex-grow  bg-gray-100`}>
            <MenuLateral/>
            <div className={`ml-3 h-screen w-screen`}>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                <Conteudo>
                    {props.children}
                </Conteudo>
                <Footer/>
            </div>
        </div>
    )
}