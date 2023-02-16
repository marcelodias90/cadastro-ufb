import { hash } from "bcrypt";
import Pessoa from "../models/Pessoa";



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

    static isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }
    
    // static async criptografarSenha(obj){
        
    //     const passwordHash = await hash(obj.senha, 10)
    //     const newPessoa = new Pessoa(obj.nome, obj.sobrenome, 
    //                                  obj.idade, obj.login, passwordHash,
    //                                  obj.endereco, obj.id)
    //    return newPessoa
    // }

    // static handleChange(props, e)   {
    //         const selectdId = e
    //         const selectedOption = props.find(a => a.id === selectdId)
    //         return selectedOption
    // }

    

    // existente(props: string){
    //     const existe = props.indexOf(uf => (uf === props))
    //     if(!existe){ 
    //         return existe
    //     } else{
    //        // throw new UfException('UF existente')
    //     }
    // }
}