import Endereco from "./Endereco"

export default class Pessoa {
    #id: string
    #nome: string
    #sobrenome: string
    #idade: number
    #login: string
    #senha: string
    #endereco: Endereco[]

    constructor(nome: string, sobrenome: string, idade: number, login: string, senha: string, endereco: Endereco[], id: string = null){
        this.#nome = nome,
        this.#sobrenome = sobrenome,
        this.#idade = idade,
        this.#login = login,
        this.#senha = senha,
        this.#endereco = endereco,
        this.#id = id
    }

    static vazio(){
        return new Pessoa('', '', null , '', '', [Endereco.vazio()], '')
    }

    get id(){
        return this.#id
    }

    get nome(){
        return this.#nome
    }

    get sobrenome(){
        return this.#sobrenome
    }

    get idade(){
        return this.#idade
    }

    get login(){
        return this.#login
    }

    get senha(){
        return this.#senha
    }
    get endereco(){
        return this.#endereco
    }
    setEndereco(novoEndereco){
        this.#endereco = novoEndereco;
    }
}