import { useState, useEffect } from "react"

import ColecaoEndereco from "../../backend/db/ColecaoEndereco";
import Endereco from "../core/models/Endereco";
import EnderecoRepositorio from "../core/repositories/EnderecoRepositorio";
import { validador } from "../core/services/validador";
import { alertaErro, alertaSucess } from "../core/settings/settings";

export default function useEndereco() {
    const repo: EnderecoRepositorio = new ColecaoEndereco

    const [endereco, setEndereco] = useState<Endereco>(Endereco.vazio())
    const [enderecos, setEnderecos] = useState<Endereco[]>([])

    useEffect(obterTodos, [])

    function obterTodos() {
        repo.obterTodos().then(enderecos => {
            setEnderecos(enderecos)
        })
    }

    function enderecoSelecionado(endereco: Endereco){
        setEndereco(endereco)
    }

    function cleanForms(){
        setEndereco(Endereco.vazio())
    }

    async function excluirEndereco(endereco: Endereco){
        await repo.excluir(endereco)
        obterTodos()
    }

    async function salvarEndereco(endereco: Endereco){
        if(validador.isStringValida(endereco.rua, 
                                    endereco.bairro.nome, 
                                    endereco.bairro.municipio.nome, 
                                    endereco.bairro.municipio.uf.nomeUf, endereco.numero)){
            await repo.salvar(endereco)
            alertaSucess(endereco.rua, endereco.id)
            cleanForms()
            obterTodos()                            
        } else {
            alertaErro()
            return false
        }
    }

    return{
        endereco,
        enderecos,
        obterTodos,
        cleanForms,
        salvarEndereco,
        excluirEndereco,
        enderecoSelecionado
    }

}
