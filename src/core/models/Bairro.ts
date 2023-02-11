import Municipio from "./Municipio"


export default class Bairro {
    #id: string
    #nome: string
    #municipio: Municipio
    

    constructor(nome: string, municipio: Municipio, id: string = null ){
        this.#nome = nome
        this.#municipio = municipio
        this.#id = id
        
    }

    static vazio(){
        return new Bairro('', Municipio.vazio(), '')
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    
    get municipio(){
        return this.#municipio
    }

}