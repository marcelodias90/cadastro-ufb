import FormularioEndereco from "../components/forms/FormularioEndereco";
import Layout from "../components/Layout";



export default function endereco(){

    return(
        <Layout titulo="Cadastrar Endereços" subtitulo="Informe os endereços" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-zinc-400">
            <FormularioEndereco />
        </Layout>
    )
}