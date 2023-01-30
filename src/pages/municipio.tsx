import FormularioMunicipio from "../components/forms/FormularioMunicipio";
import Layout from "../components/Layout";
import TabelaMunicipio from "../components/table/TabelaMunicipio";
import Municipio from "../core/Municipio";
import Uf from "../core/Uf";

export default function municipio() {

    const municipios = [
        new Municipio('Belo horizonte',  new Uf('MINAS GERAIS', 'MG'),'', '1'),
        new Municipio('São paulo', new Uf('SAO PAULO', 'SP'),'' , '2'),
        new Municipio('Belo horizonte', new Uf('RIO DE JANEIRO', 'RJ') ,'' , '3'),
        new Municipio('Belo horizonte', new Uf('ESPIRITO SANTO', 'ES') ,'' , '4'),
        new Municipio('Belo horizonte', new Uf('MATO GROSO', 'MT') ,'', '5'),
        new Municipio('Belo horizonte', new Uf('DISTRITO FEDERAL', 'DF') ,'' , '6'),
    ]

    return (
        <Layout titulo="Cadastrar Município" subtitulo="Informe o nome do Município e o Estado">
            <FormularioMunicipio municipios={municipios} municipio={municipios[2]} />
            <TabelaMunicipio municipios={municipios}/>
        </Layout>
    )
}