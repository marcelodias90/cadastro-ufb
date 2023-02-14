import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import Footer from "./Footer"
import MenuLateral from "./MenuLateral"


interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
    className?: string
    styleConteudo?: string
    styletitulo?: string
    cor?: string
    
}

export default function Layout(props: LayoutProps){
    return (
        <div className={`flex flex-grow  ${props.cor}`}>
            <MenuLateral/>
            <div className={`ml-3 h-screen w-screen`}>
                <div id="loading" className=" fixed top-0 left-0 right-0 bottom-0 hidden items-center justify-center  bg-gray-100 z-50">
                    <img src="images/loading.gif" alt="loading" className=" w-24 h-24"/>
                </div>
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} className={props.styletitulo}/>
                <Conteudo className={props.styleConteudo}>
                    {props.children} 
                </Conteudo>
                <Footer/>
            </div>
        </div>
    )
}