import services from "../core/services/service"

interface SelectProps {
    children?: any
    texto: string
    id?: string
    valor?: string | number
    onChange?: (valor: any) => void
    selectText: string
}

export default function Select(props: SelectProps) {
    return (
        <div className={`flex flex-col ml-10 p-2 w-2/4 `}>
            <label className=" m-2 font-semibold text-lg">
                {props.texto}
            </label>
            <select value={props.valor}  className=" rounded-md hover:scale-110" id={props.id} onChange={e => props.onChange?.(e.target.value)}>
               <option value='' disabled className="text-center" >------------ Selecione o {props.selectText} ------------</option>
                {props.children} 
            </select>
        </div>
    )
}

export function exibirSelectEstado(props) {
    return props.sort(services.ordenarNomeUf).map((estado, i) => {
        return (
            <option key={estado.id} value={estado.id} className="text-center">{estado.nomeUf} - {estado.sigla}</option>
        )
    })
}

export function exibirSelectMunicipio(estado, id, municipios) {
    console.log(estado)
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