import { IconeCadastro, Iconecasa, IconePessoa } from "./icons";
import MenuItem from "./MenuItem";


export default function MenuLateral() {
    return (
        <aside className={`flex flex-col  bg-gray-200 text-gray-700 `}>
            <div className="h-60 w-60 ">
                  <img src="images/logo.jpg" alt="logo"/>
            </div>
            <ul>
                <MenuItem texto="Página Inicial" icone={Iconecasa} className="black" url="/"/>
                <MenuItem texto="Cadastro UF" icone={IconeCadastro} url="/uf"/>
                <MenuItem texto="Cadastro Municipio" icone={IconeCadastro}  url="/municipio"/>
                <MenuItem texto="Cadastro Bairro"  icone={IconeCadastro} url="/bairro"/>
                <MenuItem texto="Cadastro Endereço" icone={IconeCadastro} url="/endereco"/>
                <MenuItem texto="Cadastro Pessoa" icone={IconePessoa} url="/pessoa"/>
            </ul>
        </aside>
    )
}