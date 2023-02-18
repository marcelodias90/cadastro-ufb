import FormularioEndereco from "../components/forms/FormularioEndereco";
import Layout from "../components/Layout";
import useBairro from "../hooks/useBairro";
import useEndereco from "../hooks/useEndereco";
import useMunicipio from "../hooks/useMunicipio";
import usePessoa from "../hooks/usePessoa";
import useUfs from "../hooks/useUf";



export default function endereco() {
    const {endereco, cleanForms} = useEndereco()
    const { ufs } = useUfs()
    const { municipios } = useMunicipio()
    const { bairros } = useBairro()
    const { pessoas } = usePessoa()

    return (
        <Layout titulo="Cadastrar Endereços" subtitulo="Informe os endereços" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-zinc-400">
            <FormularioEndereco pessoas={pessoas} estados={ufs} 
                            municipios={municipios} bairros={bairros} 
                            endereco={endereco} cancelado={cleanForms}
                />
        </Layout>
    )
}