import Endereco from "../models/Endereco";

export default interface EnderecoRepositorio {

    salvar(endereco: Endereco): Promise<Endereco>
    excluir(endereco: Endereco): Promise<void>
    obterTodos(): Promise<Endereco[]>
}


