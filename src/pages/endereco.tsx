import FormularioEndereco from "../components/forms/FormularioEndereco";
import Layout from "../components/Layout";
import useBairro from "../hooks/useBairro";
import useEndereco from "../hooks/useEndereco";
import useMunicipio from "../hooks/useMunicipio";
import useUfs from "../hooks/useUf";



export default function endereco() {
    const {endereco} = useEndereco()
    const { ufs } = useUfs()
    const { municipios } = useMunicipio()
    const { bairros } = useBairro()

    return (
        <Layout titulo="Cadastrar Endereços" subtitulo="Informe os endereços" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-zinc-400">
            <FormularioEndereco estados={ufs} municipios={municipios} bairros={bairros} endereco={endereco} />
        </Layout>
    )
}