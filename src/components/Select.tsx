
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