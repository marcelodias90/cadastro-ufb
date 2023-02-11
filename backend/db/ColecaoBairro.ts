import Bairro from "../../src/core/models/Bairro";
import BairroRepositorio from "../../src/core/repositories/BairroRepositorio";
import firebase from "../config";


export default class ColecaoBairro implements BairroRepositorio {
    
    #conversor ={
        toFirestore(bairro: Bairro) {
            return {
                nome: bairro.nome,
                municipio: {
                    id: bairro.municipio.id,
                    nome: bairro.municipio.nome,
                    uf: {
                        nomeUf: bairro.municipio.uf.nomeUf,
                        sigla: bairro.municipio.uf.sigla,
                        id: bairro.municipio.uf.id
                    }
                }
               
                
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Bairro {
            const dados = snapshot.data(options)
            return new Bairro(dados.nome, dados.municipio, snapshot.id)
        }
    }

    async salvar(bairro: Bairro): Promise<Bairro> {
        if(bairro?.id){
            await this.colecao().doc(bairro.id).set(bairro)
            return bairro
        } else {
            const docRef = await this.colecao().add(bairro)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(bairro: Bairro): Promise<void> {
        return this.colecao().doc(bairro.id).delete()
    }

    async obterTodos(): Promise<Bairro[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('bairros').withConverter(this.#conversor)
    }
}