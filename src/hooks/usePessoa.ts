import ColecaoPessoa from "../../backend/db/ColecaoPessoa";
import PessoaRepositorio from "../core/repositories/PessoaRepositorio";
import { useState, useEffect } from "react"
import Pessoa from "../core/models/Pessoa";
import { hash } from "bcrypt";
import { validador } from "../core/services/validador";
import { alertaErro, alertaSucess } from "../core/settings/settings";
import services from "../core/services/service";

export default function usePessoa() {
    const repo: PessoaRepositorio = new ColecaoPessoa()

    const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
    const [pessoas, setPessoas] = useState<Pessoa[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(pessoas => {
            setPessoas(pessoas)
        })
    }

    function pessoaSelecionada(pessoa: Pessoa) {
        setPessoa(pessoa)
    }

    async function excluirPessoa(pessoa: Pessoa) {
        await repo.excluir(pessoa)
        obterTodos()
    }

    function cleanForms() {
        setPessoa(Pessoa.vazio())
    }

    async function salvarPessoa(pessoa: Pessoa) {
         
        if (validador.pessoaValida(pessoa.nome, pessoa.sobrenome,
            pessoa.idade, pessoa.login, pessoa.senha)) {
            await repo.salvar(pessoa)
            alertaSucess(pessoa.nome, pessoa.id)
            cleanForms()
            obterTodos()
        } else {
            alertaErro()
            return false
        }
    }

    return {
        pessoa,
        pessoas,
        cleanForms,
        obterTodos,
        salvarPessoa,
        excluirPessoa,
        pessoaSelecionada
    }
}