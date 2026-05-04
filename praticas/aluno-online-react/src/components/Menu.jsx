import ListagemDeFaltas from "../pages/Listagemdefaltas";
import ListagemDeBoletos from "../pages/Listagemdeboletos";
import ListagemDeNotas from "../pages/Listagemdenotas";
import ListagemDeRequerimentos from "../pages/Listagemderequerimentos";

function Menu(){
    return (
        <nav>
            <ul>
                <li>Dashboard</li>
                <li>Notas</li>
                <li>Faltas</li>
                <li>Boletos</li>
                <li>Requerimentos</li>
                <li>Sair</li>
            </ul>
        </nav>
        )
}

export default Menu;