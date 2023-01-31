import Municipio from "./Municipio";

export default interface MunicipioRepositorio {
    salvar(municipio: Municipio): Promise<Municipio>
    excluir(municipio: Municipio): Promise<void>
    obterTodos(): Promise<Municipio[]>
}