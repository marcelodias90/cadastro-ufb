export default class Bairro {
    #id: string
    #nome: string
    #estado: string
    #municipio: string

    constructor(nome: string, estado: string, municipio: string, id: string = null ){
        this.#nome = nome
        this.#estado = estado
        this.#municipio = municipio
        this.#id = id
    }

    static vazio(){
        return new Bairro('', '', '', '')
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get estado(){
        return this.#estado
    }

    get municipio(){
        return this.#municipio
    }

}