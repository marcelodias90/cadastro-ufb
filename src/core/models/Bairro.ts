import Municipio from "./Municipio"
import Uf from "./Uf"

export default class Bairro {
    #id: string
    #nome: string
    #municipio: Municipio
    #uf: Uf

    constructor(nome: string, municipio: Municipio, uf: Uf, id: string = null ){
        this.#nome = nome
        this.#municipio = municipio
        this.#id = id
        this.#uf = uf
    }

    static vazio(){
        return new Bairro('', Municipio.vazio(), Uf.vazio(), '')
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

    get uf(){
        return this.#uf
    }

}