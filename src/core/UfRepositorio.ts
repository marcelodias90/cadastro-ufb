import Uf from "./Uf";


export default interface UfRepositorio {
    salvar(uf: Uf): Promise<Uf>
    excluir(uf: Uf): Promise<void>
    obterTodos(): Promise<Uf[]>
}