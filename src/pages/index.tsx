import Layout from "../components/Layout";

export default function Home() {

  

  return (
      <Layout titulo="Página Inicial" subtitulo="Cadastro de Ufs, Municipios, Bairros e Endereços de pessoas" 
              styleConteudo=""
              
              >
            <img className={`  ml-72  
                              scale-100 opacity-70 scale-x-125 bg-blue-500 shadow-lg shadow-blue-500/50 
                          `}
            src="images/bandeiras.png"></img>
      </Layout>
  )
}
