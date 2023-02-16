import { useEffect, useState } from "react";
import ColecaoBairro from "../../backend/db/ColecaoBairro";
import Bairro from "../core/models/Bairro";
import BairroRepositorio from "../core/repositories/BairroRepositorio";
import { validador } from "../core/services/validador";
import { alertaErro, alertaSucess } from "../core/settings/settings";

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
        if(validador.isStringValida(bairro.nome, bairro.municipio.uf.nomeUf, bairro.municipio.nome)){
            await repo.salvar(bairro)
            alertaSucess(bairro.nome, bairro.id)
            cleanForms()
            obterTodos()
        }else{
            alertaErro()
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