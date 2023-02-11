import FormularioBairro from "../components/forms/Formulariobairro";
import Layout from "../components/Layout";
import TabelaBairro from "../components/table/TabelaBairro";
import useBairro from "../hooks/useBairro";
import useMunicipio from "../hooks/useMunicipio";
import useUfs from "../hooks/useUfs";


export default function bairro(){

    const {bairro, bairros, cleanForms, excluirBairro, salvarBairro, bairroSelecionado} = useBairro()
    const {municipios} = useMunicipio()
    const {ufs} = useUfs()

    return(
        <Layout titulo="Cadastrar Bairro" subtitulo="Informe o nome do Bairro, Município e Estado" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-green-300">
               <FormularioBairro estados={ufs} municipios={municipios} bairro={bairro} cancelado={cleanForms} bairroMudou={salvarBairro}/>
               <TabelaBairro bairros={bairros} bairroSelecionado={bairroSelecionado} bairroExcluido={excluirBairro}/> 
        </Layout>
    )
}