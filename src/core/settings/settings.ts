import { useEffect } from "react"
import swal from "sweetalert"




export function UfException(message) {
    this.message = message
    this.name = 'UfException'
}

function setError(props, props1) {
    const spans = document.getElementById(props1)
    document.getElementById(props).style.border = '2px solid #e63636'  // Volta o cursor para o ID
    document.getElementById(props).focus()  // Volta o cursor para o ID
    spans.style.display = 'flex'
    return false
}
function removeError(props, props1) {
    document.getElementById(props).style.border = ''
    const spans = document.getElementById(props1)
    spans.style.display = 'none'

}

function setErrorSelec(props, props1) {
    const spans = document.getElementById(props1)
    document.getElementById(props).style.border = '2px solid #e63636'  // Volta o cursor para o ID
    document.getElementById(props).focus()  // Volta o cursor para o ID
    
    return false
}

function removeErrorSelect(props, props1) {
    document.getElementById(props).style.border = ''
    const spans = document.getElementById(props1)
    spans.style.display = 'none'

}




export function verificarExistente(props)  {
    
    props.map(uf => {
       if ((<HTMLInputElement>document.getElementById('nome')).value === uf.nomeUf) { 
            return true
        } 
        else{
            return false
        } 
    }) 
    
}

export function validarCamposNome() {
    if ((<HTMLInputElement>document.getElementById('nome')).value === '') { // converter o resultado getElementById() para HTMLInputElement
        setError('nome', 'span')
    } else{
        removeError('nome', 'span')
    }
}
export function validarCamposSigla() {
    if ((<HTMLInputElement>document.getElementById('sigla')).value === '') { // converter o resultado getElementById() para HTMLInputElement
        setError('sigla', 'span1')
    } else{
        removeError('sigla', 'span1')
    }
}

export function validarCamposEstado() {
    if ((<HTMLInputElement>document.getElementById('estados')).value === '') { 
        setErrorSelec('estados', 'span')
    } else{
        removeErrorSelect('estados', 'span')
    }
}

export function alertaSucess(props: string, props1: any){
    const title = props1?  "Alterado" : "Cadastrado"
    swal({
        title: `${title} com Sucesso`,
        text: props,
        icon: "success"
    })
}

export function alertaErro(){
    
    swal({
        title: "Cadastro Inválido",
        text: `Informe todo os campos`,
        icon: "error",
        timer: 3000
        
    })
}




    //   $(window).on('load',function(){
    //     $("loading").fadeOut(1000);
    //   });
       



