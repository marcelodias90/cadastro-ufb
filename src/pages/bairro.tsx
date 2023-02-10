import FormularioBairro from "../components/forms/Formulariobairro";
import Layout from "../components/Layout";
import useBairro from "../hooks/useBairro";
import useMunicipio from "../hooks/useMunicipio";
import useUfs from "../hooks/useUfs";


export default function bairro(){

    const {bairro, bairros, cleanForms, excluirBairro, salvarBairro, bairroSelecionado} = useBairro()
    const {municipios} = useMunicipio()
    const {ufs} = useUfs()

    return(
        <Layout titulo="Cadastrar Bairro" subtitulo="Informe o nome do Bairro, Município e Estado">
               <FormularioBairro estados={ufs} municipios={municipios} bairro={bairro} cancelado={cleanForms} bairroMudou={salvarBairro}/>
        </Layout>
    )
}