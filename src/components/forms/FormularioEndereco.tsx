import { useEffect, useState } from "react"
import Bairro from "../../core/models/Bairro"
import Endereco from "../../core/models/Endereco"
import Municipio from "../../core/models/Municipio"
import Uf from "../../core/models/Uf"
import services from "../../core/services/service"
import Botao from "../Botao"
import Entrada from "../Entrada"
import Select, { exibirSelectEstado, exibirSelectMunicipio } from "../Select"

interface FormularioEnderecoProps{
    endereco: Endereco
    estados: Uf[]
    bairros: Bairro[]
    municipios: Municipio[]
    enderecoMudou?: (endereco: Endereco) => void
    cancelado?: () => void
}

export default function FormularioEndereco(props: FormularioEnderecoProps) {
    const id = props.endereco?.id

    const [rua, setRua] = useState('' as string)
    const [numero, setNumero] = useState(null as number)
    const [estados, setEstados] = useState<Uf[]>([Uf.vazio()])
    const [estado, setEstado] = useState<Uf>(Uf.vazio())
    const [municipios, setMunicipios] = useState<Municipio[]>([Municipio.vazio()])
    const [municipio, setMunicipio] = useState<Municipio>(Municipio.vazio())
    const [bairros, setBairros] = useState<Bairro[]>([Bairro.vazio()])

    useEffect(() => {
        setRua(props?.endereco?.rua ?? '');
        setNumero(props?.endereco?.numero?? null);
        setEstados(props?.estados ?? [])
        setBairros(props?.bairros ?? [])
        setMunicipios(props?.municipios ?? [])
        setEstado(props?.endereco?.bairro?.municipio?.uf ?? Uf.vazio())
        setMunicipio(props?.endereco.bairro.municipio ?? Municipio.vazio())
    }, [props])

   const handleChangeEstado = event => {
    const selectdId = event
    const selectedOption = estados.find(estado => estado.id === selectdId)
    setEstado(selectedOption)
   }
   const handleChangeMunicipio = event => {
    const selectdId = event
    const selectedOption = municipios.find(municipio => municipio.id === selectdId)
    setMunicipio(selectedOption)
   }


    return (
        <>
            <div className={`bg-zinc-300 w-2/5 rounded-md border-8 border-zinc-300 shadow-2xl ml-10 mr-10`}>
                    <Entrada id="rua" texto="Rua"/>
                    <Entrada id="numero" texto="Numero" tipo="number" tamanho="1"/>
                    <Select id="estados"  texto="Estado" selectText="Estado" onChange={handleChangeEstado}>
                        {exibirSelectEstado(estados)}
                    </Select>
                    <Select id="municipios" texto="Município" selectText="Município" onChange={handleChangeMunicipio}>
                         {exibirSelectMunicipio(estado, id, municipios)}   
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