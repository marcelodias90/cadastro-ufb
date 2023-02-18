import Select, { exibirSelectBairro, 
                exibirSelectEstado, exibirSelectMunicipio, 
                exibirSelectPessoa } from "../Select"
import { useEffect, useState } from "react"
import Bairro from "../../core/models/Bairro"
import Endereco from "../../core/models/Endereco"
import Municipio from "../../core/models/Municipio"
import Pessoa from "../../core/models/Pessoa"
import Uf from "../../core/models/Uf"
import Botao from "../Botao"
import Entrada from "../Entrada"

interface FormularioEnderecoProps {
    endereco: Endereco
    pessoas: Pessoa[]
    estados: Uf[]
    bairros: Bairro[]
    municipios: Municipio[]
    enderecoMudou?: (pesso: Pessoa) => void
    cancelado?: () => void
}

export default function FormularioEndereco(props: FormularioEnderecoProps) {
    const id = props.endereco?.id

    const [rua, setRua] = useState('' as string)
    const [numero, setNumero] = useState(null as number)
    const [estados, setEstados] = useState<Uf[]>([Uf.vazio()])
    const [estado, setEstado] = useState<Uf>(Uf.vazio())
    const [bairro, setBairro] = useState<Bairro>(Bairro.vazio())
    const [pessoas, setPessoas] = useState<Pessoa[]>([Pessoa.vazio()])
    const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
    const [municipios, setMunicipios] = useState<Municipio[]>([Municipio.vazio()])
    const [municipio, setMunicipio] = useState<Municipio>(Municipio.vazio())
    const [bairros, setBairros] = useState<Bairro[]>([Bairro.vazio()])

    useEffect(() => {
        setRua(props?.endereco?.rua ?? '');
        setNumero(props?.endereco?.numero ?? null);
        setEstados(props?.estados ?? [])
        setBairros(props?.bairros ?? [])
        setPessoas(props?.pessoas ?? [])
        setMunicipios(props?.municipios ?? [])
        setBairro(props?.endereco?.bairro ?? Bairro.vazio())
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

    const handleChangeBairro = event => {
        const selectdId = event
        const selectedOption = bairros.find(bairro => bairro.id === selectdId)
        setBairro(selectedOption)
    }

    const handleChangePessoa = event => {
        const selectdId = event
        const selectedOption = pessoas.find(pessoa => pessoa.id === selectdId)
        setPessoa(selectedOption)
    }


    return (
        <>
            <div className={`bg-zinc-300 w-2/5 rounded-md border-8 border-zinc-300 shadow-2xl ml-10 mr-10`}>
                <Entrada id="rua" texto="Rua" />
                <div className="flex">
                    <Entrada id="numero" texto="Numero" tipo="number" tamanho="1" />
                    <Select id="pessoas" texto="Pessoa" selectText="Pessoa" onChange={handleChangePessoa}>
                        {exibirSelectPessoa(pessoas)}
                    </Select>
                </div>
                <div className="flex">
                    <Select id="bairros" texto="Bairro" selectText="Bairro" onChange={handleChangeBairro}>
                            {exibirSelectBairro(municipio, id, bairros)}
                    </Select>
                    <Select id="estados" texto="Estado" selectText="Estado" onChange={handleChangeEstado} tamanho="w-1/3">
                        {exibirSelectEstado(estados)}
                    </Select>
                </div>
                <Select id="municipios" texto="Município" selectText="Município" onChange={handleChangeMunicipio}>
                    {exibirSelectMunicipio(estado, id, municipios)}
                </Select>
                <div className="flex items-end justify-end m-3 ">
                    <Botao cor={`${id ? 'green' : 'blue'}`} className="mr-2" 
                            >
                        {props.endereco?.id ? 'Alterar' : 'Salvar'}
                    </Botao>
                    <Botao cor="gray" onClick={props.cancelado}>
                        Cancelar
                    </Botao>
                </div>
            </div>
        </>
    )
}