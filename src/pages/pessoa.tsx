import FormularioPessoa from "../components/forms/FormularioPessoa";
import Layout from "../components/Layout";
import TabelaPessoa from "../components/table/TabelaPessoa";
import usePessoa from "../hooks/usePessoa";


export default function pessoa(){

     const {pessoa, pessoas, cleanForms, salvarPessoa, pessoaSelecionada, excluirPessoa} = usePessoa()

     return (
        <Layout titulo="Cadastrar Pessoa" subtitulo="Informe todos os dados da Pessoa" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-teal-200">
            <FormularioPessoa pessoa={pessoa} cancelado={cleanForms} pessoaMudou={salvarPessoa}/>
            <TabelaPessoa pessoas={pessoas} pessoaSelecionada={pessoaSelecionada} pessoaExcluido={excluirPessoa}/>
        </Layout>
     )
}