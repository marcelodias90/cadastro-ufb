import Uf from "./Uf"


export default class Municipio {
    #id: string
    #nome: string
    #uf : Uf
    #estado: string

    constructor(nome: string, uf: Uf, estado: string, id: string=null){
        this.#nome = nome
        this.#id = id
        this.#uf = uf
        this.#estado = uf.nomeUf
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
    get estado(){
        return this.#estado
    }
}