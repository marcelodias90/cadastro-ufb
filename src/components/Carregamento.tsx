import Image from 'next/image'
import loading from '../../public/images/loading.gif'

export default function Carregamento(){

    window.addEventListener("load", function(){
        var loading = document.getElementById("loading")
        setTimeout(function(){
            loading.style.display='none'
        }, 1000)
    })

    return(
        <div id='loading' className="  absolute bg-white h-screen w-screen">
            <Image src={loading} alt="Imagen loading"/>
        </div>
    )
}