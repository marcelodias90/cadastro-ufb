import Layout from "../components/Layout";

export default function Home() {
  return (
      <Layout titulo="Página Inicial" subtitulo="Cadastro de Ufs, Municipios, Bairros e Endereços de pessoas" 
              styleConteudo=""
              cor="bg-gradient-to-r from-white via-yellow-100 to-green-300 "
              styletitulo=""
              >
            <img className={`  ml-72  
                              scale-100  scale-x-150  opacity-5 
                          `}
            src="images/bandeiras.png"></img>
            
      </Layout>
  )
}
