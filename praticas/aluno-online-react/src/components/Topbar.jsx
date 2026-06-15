import avatar from '../assets/avatar.svg';
import { useAuth } from '../contexts/AuthContext';

function Topbar(props) {
    const { usuario } = useAuth();
    const titulo = props.titulo || "Dashboard";

    return (
        <header className="topbar">
            <div>
                <h1>{titulo}</h1>
                <p>Olá, {usuario?.nome || "Aluno"}</p>
            </div>
            <img src={avatar} alt="imagem do avatar" />
        </header>
    );
}

export default Topbar;
