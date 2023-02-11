
interface EntradaProps {
    id: string
    texto: string
    tipo?: 'text' | 'number'
    valor?: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
    children?: any
    obrigatorio?: boolean
    validar?: (valor: any) => void
    menssage?: string
    nameSpan?: string
}

export default function Entrada(props: EntradaProps) {
    return (

        <div className={`flex flex-col ml-10 p-2 w-3/4`}>
            <label className=" m-2 font-semibold text-lg">
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'} id={props.id} value={props.valor} readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)} onBlur={props.validar}
                required={props.obrigatorio}
                className={`    
                             border text-sm border-gray-100 rounded-lg focus:outline-none bg-gray-100  
                             px-4 py-2 focus:bg-white ${props.somenteLeitura ? 'bg-gray-300' : 'focus:border-blue-400'}  
                            `} />
            <span id={props.nameSpan} className="text-sm font-serif text-red-600 mt-1 hidden" >{props.menssage}</span>
        </div>


    )
}
