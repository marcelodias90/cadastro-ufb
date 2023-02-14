import Bairro from "./Bairro"

export default class Endereco {
    #id: string
    #rua: string
    #numero: number
    #bairro: Bairro

    constructor(rua: string, numero: number, bairro: Bairro, id: string = null){
        this.#rua = rua,
        this.#numero = numero,
        this.#bairro = bairro,
        this.#id = id
    }

    static vazio(){
        return new Endereco('', null, Bairro.vazio(), '')
    }

    get id(){
        return this.#id
    }

    get rua(){
       return this.#rua
    }

    get numero(){
        return this.#numero
    }

    get bairro(){
        return this.#bairro
    }
}