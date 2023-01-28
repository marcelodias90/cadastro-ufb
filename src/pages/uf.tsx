import FormularioUf from "../components/forms/FormularioUf";
import Tabela from "../components/forms/TabelaUf";
import Layout from "../components/Layout";
import useUfs from "../hooks/useUfs";

export default function uf() {

    const {ufs, uf, cleanForms, salvarUf, ufSelecionado, excluirUf} = useUfs()
   
    return (
        <Layout titulo="Cadastrar UF" subtitulo="Informe o nome e Sigla do Estado" >
                <FormularioUf uf={uf} cancelado={cleanForms} ufMudou={salvarUf}/>
                <Tabela ufs={ufs} ufSelecionado={ufSelecionado} ufExcluido={excluirUf}/>
        </Layout>
    )
}