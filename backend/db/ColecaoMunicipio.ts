import Municipio from "../../src/core/Municipio";
import MunicipioRepositorio from "../../src/core/MunicipioRepositorio";
import firebase from '../config'


export default class ColecaoMunicipio implements MunicipioRepositorio {
     
    #conversor ={
        toFirestore(municipio: Municipio){
            return {
                nome: municipio.nome,
                estado : municipio.estado
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Municipio{
            const dados = snapshot.data(options)
            return new Municipio(dados.nome, dados.estado, snapshot.id)
        }
    }

    async salvar(municipio: Municipio): Promise<Municipio> {
        if(municipio?.id){
            await this.colecao().doc(municipio.id).set(municipio)
            return municipio
        }else {
            const docRef = await this.colecao().add(municipio)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(municipio: Municipio): Promise<void> {
        return this.colecao().doc(municipio.id).delete()
    }

    async obterTodos(): Promise<Municipio[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return firebase.firestore().collection('ufs').withConverter(this.#conversor)
    }
}

