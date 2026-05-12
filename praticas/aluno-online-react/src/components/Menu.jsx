import './Menu.css';
import { Link, NavLink } from "react-router-dom";

function Menu(){
    /* const usuarioId = 1; */

    return (
        <nav className="menu">
            <ul>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                {/* <li><NavLink to="/home">Home</NavLink></li> */}
                {/* <li><NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink></li> */}
                <li><NavLink to="/notas">Notas</NavLink></li>
                <li><NavLink to="/faltas">Faltas</NavLink></li>
                <li><NavLink to="/boletos">Boletos</NavLink></li>
                <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
                {/* <li><NavLink to="/settings">Configurações</NavLink></li> */}
                {/* <li><NavLink to="/about">Sobre</NavLink></li> */}
                <li><Link to="/login">Sair</Link></li>
            </ul>
        </nav>
    )
}

export default Menu;