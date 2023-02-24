import Endereco from "./Endereco"

export default class Pessoa {
    #id: string
    #nome: string
    #sobrenome: string
    #idade: number
    #login: string
    #senha: string
    

    constructor(nome: string, sobrenome: string, idade: number, login: string, senha: string, id: string = null){
        this.#nome = nome,
        this.#sobrenome = sobrenome,
        this.#idade = idade,
        this.#login = login,
        this.#senha = senha,
        this.#id = id
    }

    static vazio(){
        return new Pessoa('', '', null , '', '', '')
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
   
}