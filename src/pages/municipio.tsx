import FormularioMunicipio from "../components/forms/FormularioMunicipio";
import Layout from "../components/Layout";
import TabelaMunicipio from "../components/table/TabelaMunicipio";
import useMunicipio from "../hooks/useMunicipio";
import useUfs from "../hooks/useUfs";


export default function municipio() {

    const {municipio, municipios, cleanForms, excluirMunicipio, salvarMunicipio, municipioSelecionado} = useMunicipio()  
    const {ufs} = useUfs()

    return (
        <Layout titulo="Cadastrar Município" subtitulo="Informe o nome do Município e o Estado" cor="bg-gradient-to-br from-gray-50 via-gray-100 to-red-300" >
            <FormularioMunicipio estados={ufs} municipios={municipios} municipio={municipio} cancelado={cleanForms} municipioMudou={salvarMunicipio}/>
            <TabelaMunicipio municipios={municipios} municipioSelecionado={municipioSelecionado} municipioExcluido={excluirMunicipio}/>
        </Layout>
    )
}