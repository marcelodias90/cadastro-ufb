import Pessoa from "../../src/core/models/Pessoa";
import PessoaRepositorio from "../../src/core/repositories/PessoaRepositorio";
import firebase from "../config";

export default class ColecaoPessoa implements PessoaRepositorio {

    #conversor ={
        toFirestore(pessoa: Pessoa) {
            return {
                nome: pessoa.nome,
                sobrenome: pessoa.sobrenome,
                idade: pessoa.idade,
                login: pessoa.login,
                senha: pessoa.senha,
                endereco: [{
                      id: pessoa.endereco.id,
                      rua: pessoa.endereco.rua,
                      numero: pessoa.endereco.numero,
                      bairro: {
                            id: pessoa.endereco.bairro.id,
                            nome: pessoa.endereco.bairro.nome,
                            municipio: {
                                id: pessoa.endereco.bairro.municipio.id,
                                nome: pessoa.endereco.bairro.municipio.nome,
                                uf: {
                                    id: pessoa.endereco.bairro.municipio.uf.id,
                                    nomeUf: pessoa.endereco.bairro.municipio.uf.nomeUf,
                                    sigla: pessoa.endereco.bairro.municipio.uf.sigla
                                }
                            }
                      }
                }]
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Pessoa {
            const dados = snapshot.data(options)
            return new Pessoa(dados.nome, dados.sobrenome, dados.idade, dados.login, dados.senha, dados.endereco, snapshot.id)
        }
    }

    async salvar(pessoa: Pessoa): Promise<Pessoa> {
        if(pessoa?.id){
            await this.colecao().doc(pessoa.id).set(pessoa)
            return pessoa
        } else {
            const docRef = await this.colecao().add(pessoa)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(pessoa: Pessoa): Promise<void> {
        return this.colecao().doc(pessoa.id).delete()
    }

    async obterTodos(): Promise<Pessoa[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('pessoas').withConverter(this.#conversor)
    }
}