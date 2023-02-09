import { useEffect, useState } from "react";
import ColecaoBairro from "../../backend/db/ColecaoBairro";
import Bairro from "../core/models/Bairro";
import BairroRepositorio from "../core/repositories/BairroRepositorio";
import { validador } from "../core/services/validador";

export default function useBairro(){
    const repo: BairroRepositorio = new ColecaoBairro()

    const [bairro, setBairro] = useState<Bairro>(Bairro.vazio())
    const [bairros, setBairros] = useState<Bairro[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(bairros => {
            setBairros(bairros)
        })
    }

    function bairroSelecionado(bairro: Bairro){
        setBairro(bairro)
    }

    function cleanForms(){
        setBairro(Bairro.vazio())
    }

    async function excluirBairro(bairro: Bairro){
        await repo.excluir(bairro)
        obterTodos()
    }

    async function salvarBairro(bairro: Bairro){
        if(validador.isStringValida(bairro.nome, bairro.estado, bairro.municipio)){
            await repo.salvar(bairro)
            alert('Cadastrado com Sucesso')
            cleanForms()
            obterTodos()
        }else{
            alert('Preencha todos os campos')
            return false
        }
    }

    return {
        bairro,
        bairros,
        obterTodos,
        cleanForms,
        salvarBairro,
        excluirBairro,
        bairroSelecionado
    }

}