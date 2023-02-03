import Layout from "../components/Layout";

export default function Home() {

  

  return (
      <Layout titulo="Página Inicial" subtitulo="Cadastro de Ufs, Municipios, Bairros e Endereços de pessoas">
            <img className={` bg-blue-500 shadow-2xl shadow-blue-500/50 ml-32  
                              scale-100 
                          `}
            src="images/bandeiras.png"></img>
      </Layout>
  )
}
