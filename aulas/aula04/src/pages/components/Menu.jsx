import './Menu.css';
import { Link, NavLink } from "react-router";

function Menu() {
    const usurioId = 0;

    return <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to={`/perfil/${usurioId}`}>Perfil</NavLink></li>
            <li><NavLink to="/settings">Configurações</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><Link to="/login">Sair</Link></li> 
        </ul>
    </nav>
}

export default Menu;