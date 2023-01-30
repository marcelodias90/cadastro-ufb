
interface SelectProps {
    children?: any
    texto: string

}

export default function Select(props: SelectProps) {
    return (
        <div className={`flex flex-col ml-10 p-2 w-2/4`}>
            <label className=" m-2 font-semibold text-lg">
                {props.texto}
            </label>
            <select>
                <option className="text-center">------------ Selecione o Estado ------------</option>
                {props.children}
            </select>
        </div>
    )
}