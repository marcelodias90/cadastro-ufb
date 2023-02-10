export default class Uf {
     #id: string
     #sigla: string
     #nomeUf: string

    constructor(nomeUf: string, sigla: string, id: string = null){
        this.#id = id
        this.#nomeUf = nomeUf
        this.#sigla = sigla
    }

    static vazio(){
        return new Uf('', '', '')
    }

    get id(){
        return this.#id
    }

    get nomeUf(){
        return this.#nomeUf
    }
    get sigla(){
        return this.#sigla
    }
}