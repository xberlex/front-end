import './Menu.css';
import { useAuth } from '../contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router';

function Menu() {
    const usuarioId = 0;
    
    const { logout, usuario } = useAuth();

    const navigate = useNavigate();

    const handleSair = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <nav>
            <h1>Bem-vindo, {usuario.nome}!</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={`/perfil/${usuarioId}`}>Perfil</NavLink></li>
                <li><NavLink to="/settings">Configurações</NavLink></li>
                <li><NavLink to="/about">Sobre</NavLink></li>
                <li><a href="#" onClick={handleSair}>Sair</a></li>
            </ul>
        </nav>
    );
}

export default Menu;