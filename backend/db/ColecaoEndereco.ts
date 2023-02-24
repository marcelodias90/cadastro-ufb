import Endereco from "../../src/core/models/Endereco";
import EnderecoRepositorio from "../../src/core/repositories/EnderecoRepositorio";
import firebase from "../config";


export default class ColecaoEndereco implements EnderecoRepositorio{

    #conversor ={
        toFirestore(endereco: Endereco){
            return {
                rua: endereco.rua,
                numero: endereco.numero,
                bairro: {
                    id: endereco.bairro.id,
                    nome: endereco.bairro.nome,
                    municipio: {
                        id: endereco.bairro.municipio.id,
                        nome: endereco.bairro.municipio.nome,
                        uf: {
                            id: endereco.bairro.municipio.uf.id,
                            nomeUf: endereco.bairro.municipio.uf.nomeUf,
                            sigla: endereco.bairro.municipio.uf.sigla
                        }
                    }
                },
                pessoa: {
                    id: endereco.pessoa.id,
                    nome: endereco.pessoa.nome,
                    sobrenome: endereco.pessoa.sobrenome,
                    idade: endereco.pessoa.idade,
                    login: endereco.pessoa.login,
                    senha: endereco.pessoa.senha 
                }
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) : Endereco {
            const dados = snapshot.data(options)
            return new Endereco(dados.rua, dados.numero, dados.bairro, dados.pessoa, snapshot.id)
        }
    }

    async salvar(endereco: Endereco): Promise<Endereco> {
        if(endereco?.id){
            await this.colecao().doc(endereco.id).set(endereco)
            return endereco
        } else {
            const docRef = await this.colecao().add(endereco)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(endereco: Endereco): Promise<void> {
        return this.colecao().doc(endereco.id).delete()
    }

    async obterTodos(): Promise<Endereco[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('endereços').withConverter(this.#conversor)
    }
}