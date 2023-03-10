import FormularioMunicipio from "../components/forms/FormularioMunicipio";
import Layout from "../components/Layout";
import TabelaMunicipio from "../components/table/TabelaMunicipio";
import useMunicipio from "../hooks/useMunicipio";
import useUf from "../hooks/useUf";


export default function municipio() {

    const {municipio, municipios, cleanForms, excluirMunicipio, salvarMunicipio, municipioSelecionado} = useMunicipio()  
    const {ufs, uf} = useUf()

    return (
        <Layout titulo="Cadastrar Município" subtitulo="Informe o nome do Município e o Estado" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-red-300" >
            <FormularioMunicipio uf={municipio.uf} estados={ufs}  municipio={municipio} cancelado={cleanForms} municipioMudou={salvarMunicipio}/>
            <TabelaMunicipio municipios={municipios} municipioSelecionado={municipioSelecionado} municipioExcluido={excluirMunicipio}/>
        </Layout>
    )
}