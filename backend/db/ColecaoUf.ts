import firebase from '../config'
import Uf from '../../src/core/Uf';
import UfRepositorio from "../../src/core/UfRepositorio";


export default class ColecaoUf implements UfRepositorio {

    #conversor = {
        toFirestore(uf: Uf) {
            return{
                nomeUf: uf.nomeUf,
                sigla: uf.sigla
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Uf{
            const dados = snapshot.data(options)
            return new Uf(dados.nomeUf, dados.sigla, snapshot.id)
        }
    }

    async salvar(uf: Uf): Promise<Uf> {
        if(uf?.id) {
            await this.colecao().doc(uf.id).set(uf)
            return uf
        } else {
            const docRef = await this.colecao().add(uf)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(uf: Uf): Promise<void> {
        return this.colecao().doc(uf.id).delete()
    }

    async obterTodos(): Promise<Uf[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase.firestore().collection('ufs').withConverter(this.#conversor)
    }
}