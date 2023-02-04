import { useEffect, useState } from "react";
import ColecaoMunicipio from "../../backend/db/ColecaoMunicipio";
import Municipio from "../core/models/Municipio";
import MunicipioRepositorio from "../core/repositories/MunicipioRepositorio";
import { validador } from "../core/services/validador";


export default function useMunicipio() {
    const repo: MunicipioRepositorio = new ColecaoMunicipio()

    const [municipio, setMunicipio] = useState<Municipio>(Municipio.vazio())
    const [municipios, setMunicipios] = useState<Municipio[]>([])

    useEffect(obterTodos, [])



    function obterTodos() {
        repo.obterTodos().then(municipios => {
            setMunicipios(municipios)
        })
    }

    function municipioSelecionado(municipio: Municipio) {
        setMunicipio(municipio)
    }

    function cleanForms() {
        setMunicipio(Municipio.vazio())
    }

    async function excluirMunicipio(municipio: Municipio) {
        await repo.excluir(municipio)
        obterTodos()
    }

    async function salvarMunicipio(municipio: Municipio) {
        if (validador.isStringValida(municipio.nome, municipio.estado)) {
            await repo.salvar(municipio)
            alert('Cadastrado com sucesso')
            cleanForms()
            obterTodos()
        } else {
            alert(`Preencha todos os campos`)
            return false
        }
    }



    return {
        obterTodos,
        municipio,
        municipios,
        cleanForms,
        salvarMunicipio,
        excluirMunicipio,
        municipioSelecionado
    }

}