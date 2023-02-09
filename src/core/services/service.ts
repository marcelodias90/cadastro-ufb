


export default class services {

    static ordenarNomeUf(a, b) {
        let x = a.nomeUf.toUpperCase();
        let y = b.nomeUf.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1
    }
    static ordenarEstado(a, b) {
        let x = a.uf.nomeUf.toUpperCase();
        let y = b.uf.nomeUf.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1
    }

    static ordenarNome(a, b) {
        let x = a.nome.toUpperCase();
        let y = b.nome.toUpperCase();
        return x == y ? 0 : x > y ? 1 : -1
    }

    // constructor(props: Uf[]){
    //     this. =  props
    // }

    // existente(props: string){
    //     const existe = this._props.filter(uf => (uf.nomeUf === props))
    //     if(!existe){ 
    //         return existe
    //     } else{
    //         throw new UfException('UF existente')
    //     }
    // }
}