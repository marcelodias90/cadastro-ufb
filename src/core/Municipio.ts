
export default class Municipio {
    #id: string
    #nome: string
    #estado: string

    constructor(nome: string, estado: string, id: string = null){
        this.#nome = nome
        this.#id = id
        this.#estado = estado
    }

    static vazio(){
        return new Municipio('', '', '')
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
}