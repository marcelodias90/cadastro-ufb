import Bairro from "../models/Bairro"


export default interface BairroRepositorio {
    salvar(bairro: Bairro): Promise<Bairro>
    excluir(bairro: Bairro): Promise<void>
    obterTodos(): Promise<Bairro[]>
}