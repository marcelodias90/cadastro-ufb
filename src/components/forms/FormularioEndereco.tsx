import { useEffect, useState } from "react"
import Bairro from "../../core/models/Bairro"
import Endereco from "../../core/models/Endereco"
import Municipio from "../../core/models/Municipio"
import Uf from "../../core/models/Uf"
import Botao from "../Botao"
import Entrada from "../Entrada"
import Select from "../Select"

interface FormularioEnderecoProps{
    endereco?: Endereco
    estados?: Uf[]
    bairros?: Bairro[]
    municipios?: Municipio[]
    enderecoMudou?: (endereco: Endereco) => void
    cancelado?: () => void
}

export default function FormularioEndereco(props: FormularioEnderecoProps) {
    const id = props.endereco?.id

    const [rua, setRua] = useState('' as string)
    const [numero, setNumero] = useState(null as number)
    const [estados, setEstados] = useState<Uf[]>([Uf.vazio()])
    const [municipios, setMunicipios] = useState<Municipio[]>([Municipio.vazio()])
    const [bairros, setBairros] = useState<Bairro[]>([Bairro.vazio()])

    useEffect(() => {
        setRua(props?.endereco?.rua ?? '');
        setNumero(props?.endereco?.numero?? null);
        setEstados(props?.estados ?? [])
        setBairros(props?.bairros ?? [])
        setMunicipios(props?.municipios ?? [])
    }, [props])


    return (
        <>
            <div className={`bg-zinc-300 w-2/5 rounded-md border-8 border-gray-300 shadow-2xl ml-10 mr-10`}>
                    <Entrada id="rua" texto="Rua"/>
                    <Entrada id="numero" texto="Numero" tipo="number" tamanho="1"/>
                    <Select texto="Estado" selectText="Estado">
                        
                    </Select>
                    <Select texto="Município" selectText="Município">

                    </Select>
                    <Select texto="Bairro" selectText="Bairro">

                    </Select>
                    <div className="flex items-end justify-end m-3 ">
                        <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2">
                            {props.endereco?.id ? 'Alterar' : 'Salvar'}
                        </Botao>
                        <Botao cor="gray">
                                Cancelar
                        </Botao>
                    </div>
            </div>
        </>
    )
}