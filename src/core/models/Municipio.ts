import Uf from "./Uf"

export default class Municipio {
    #id: string
    #nome: string
    #uf: Uf

    constructor(nome: string, uf: Uf, id: string = null){
        this.#nome = nome
        this.#id = id
        this.#uf = uf
    }

    static vazio(){
        return new Municipio('', Uf.vazio(), '')
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get uf(){
        return this.#uf
    }
}