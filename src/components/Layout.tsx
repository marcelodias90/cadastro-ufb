import Cabecalho from "./Cabecalho"
import Carregamento from "./Carregamento"
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
                <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} className={props.styletitulo}/>
                
                <Conteudo className={props.styleConteudo}>
                    {props.children}
                </Conteudo>
                <Footer/>
            </div>
        </div>
    )
}