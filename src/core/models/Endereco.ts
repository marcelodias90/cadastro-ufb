import Bairro from "./Bairro"
import Pessoa from "./Pessoa"

export default class Endereco {
    #id: string
    #rua: string
    #numero: number
    #bairro: Bairro
    #pessoa: Pessoa
    

    constructor(rua: string, numero: number, bairro: Bairro, pessoa: Pessoa, id: string = null){
        this.#rua = rua,
        this.#numero = numero,
        this.#bairro = bairro,
        this.#pessoa = pessoa,
        this.#id = id
    }

    static vazio(){
        return new Endereco('', null, Bairro.vazio(), Pessoa.vazio(), '')
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

    get pessoa(){
        return this.#pessoa
    }
    
}