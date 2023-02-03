import { useEffect, useState } from "react";
import ColecaoUf from "../../backend/db/ColecaoUf";
import Uf from "../core/models/Uf";
import UfRepositorio from "../core/repositories/UfRepositorio";
import { validador } from "../core/services/validador";

export default function useUfs() {
    const repo: UfRepositorio = new ColecaoUf()

    const [uf, setUf] = useState<Uf>(Uf.vazio())
    const [ufs, setUfs] = useState<Uf[]>([])

    useEffect(obterTodos, [])


    function obterTodos() {
        repo.obterTodos().then(ufs => {
            setUfs(ufs)
        })
    }

    function ufSelecionado(uf: Uf) {
        setUf(uf)
    }

    function cleanForms() {
        setUf(Uf.vazio())
    }

    async function excluirUf(uf: Uf) {
        await repo.excluir(uf)
        obterTodos()
    }

    async function salvarUf(uf: Uf) {
        if(validador.isStringValida(uf.nomeUf, uf.sigla)){
            await repo.salvar(uf)
            alert('Cadastrado com sucesso')
            cleanForms()
            obterTodos()
        } else{
           alert(`Preencha todos os campos`)  
           return false
        }   
    }

    return {
        uf,
        ufs,
        salvarUf,
        excluirUf,
        obterTodos,
        cleanForms,
        ufSelecionado
    }

}