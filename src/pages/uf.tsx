import FormularioUf from "../components/forms/FormularioUf";
import Tabela from "../components/table/TabelaUf";
import Layout from "../components/Layout";
import useUf from "../hooks/useUf";

export default function uf() {

    const {ufs, uf, cleanForms, salvarUf, ufSelecionado, excluirUf} = useUf()
   
    return (
        <Layout titulo="Cadastrar UF" subtitulo="Informe o nome e Sigla do Estado" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-blue-300">
                <FormularioUf uf={uf} cancelado={cleanForms} ufMudou={salvarUf} />
                <Tabela ufs={ufs} ufSelecionado={ufSelecionado} ufExcluido={excluirUf}/>
        </Layout>
    )
}