import { useEffect, useState } from "react";
import ColecaoUf from "../../backend/db/ColecaoUf";
import Uf from "../core/Uf";
import UfRepositorio from "../core/UfRepositorio";

export default function useUfs() {
    const repo: UfRepositorio = new ColecaoUf()

    const [uf, setUf] = useState<Uf>(Uf.vazio())
    const [ufs, setUfs] = useState<Uf[]>([]) 

    useEffect(obterTodos,[])
    

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
        await repo.salvar(uf)
        cleanForms()
        obterTodos()
    }

    return{
        uf,
        ufs,
        salvarUf,
        excluirUf,
        obterTodos,
        cleanForms,
        ufSelecionado
    }

}