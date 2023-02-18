import services from "../core/services/service"

interface SelectProps {
    children?: any
    texto: string
    id?: string
    valor?: string | number
    onChange?: (valor: any) => void
    selectText: string
    tamanho?: string
}

export default function Select(props: SelectProps) {
    const tamanho = props.tamanho ?? "w-2/4" 
    return (
        <div className={`flex flex-col ml-10 p-2 ${tamanho} `}>
            <label className=" m-2 font-semibold text-lg">
                {props.texto}
            </label>
            <select value={props.valor}  className=" rounded-md hover:scale-110" id={props.id} onChange={e => props.onChange?.(e.target.value)}>
               <option value=''  className="text-center" > Selecione o {props.selectText}</option>
                {props.children} 
            </select>
        </div>
    )
}

export function exibirSelectEstado(props) {
    return props.sort(services.ordenarNomeUf).map((estado, i) => {
        return (
            <option key={estado.id} value={estado.id} className="text-center"> {estado.sigla}</option>
        )
    })
}


export function exibirSelectPessoa(props) {
    return props.sort(services.ordenarNome).map((pessoa, i) => {
        return (
            <option key={pessoa.id} value={pessoa.id} className="text-center"> {pessoa.nome}</option>
        )
    })
}

export function exibirSelectMunicipio(estado, id, municipios) {
    if(services.isEmpty(estado) || id){  
        return municipios.sort(services.ordenarNome).map((municipio, i) => {
        if(estado.id === municipio.uf.id){
            return (
                <option key={municipio.id} value={municipio.id} className="text-center">{municipio.nome}</option>
            )
        } else{
            return false
        }
    })
    } else{
        return false
    }
}

export function exibirSelectBairro(municipio, id, bairros) {
  
    if(services.isEmpty(municipio) || id){  
        return bairros.sort(services.ordenarNome).map((bairro, i) => {
            
        if(municipio.id === bairro.municipio.id){
            return (
                <option key={bairro.id} value={bairro.id} className="text-center">{bairro.nome}</option> 
            )
        } else{
            return false
        }
    })
    } else{
        return false
    }
}