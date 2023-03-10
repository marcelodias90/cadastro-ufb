import Municipio from "../../src/core/models/Municipio";
import MunicipioRepositorio from "../../src/core/repositories/MunicipioRepositorio";
import firebase from '../config'


export default class ColecaoMunicipio implements MunicipioRepositorio {

    #conversor = {
        toFirestore(municipio: Municipio) {
            return {
                nome: municipio.nome,
                uf: {
                    nomeUf: municipio.uf.nomeUf,
                    sigla: municipio.uf.sigla,
                    id: municipio.uf.id
                }
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Municipio {
            const dados = snapshot.data(options)
            return new Municipio(dados.nome, dados.uf, snapshot.id)
        }
    }

    async salvar(municipio: Municipio): Promise<Municipio> {
        if (municipio?.id) {
            await this.colecao().doc(municipio.id).set(municipio)
            return municipio
        } else {
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
        return firebase.firestore().collection('municipios').withConverter(this.#conversor)
    }
}

