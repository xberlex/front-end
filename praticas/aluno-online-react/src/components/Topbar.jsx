<<<<<<< HEAD
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
=======
import avatar from "../assets/avatar.svg";
import { useAuth } from "../contexts/AuthContext";

function Topbar({ titulo }) {
    const { usuario } = useAuth();
    const nome = usuario?.nome || "Aluno";

    return (
        <header className="topbar">
            <div>
                <h1>{titulo || `Olá, ${nome}!`}</h1>
                <p>{usuario?.email}</p>
            </div>
            <img src={avatar} alt="imagem do avatar" className="user-avatar" />
>>>>>>> 190d31bef76a4481f1fe01c58b553b041b485cf2
        </header>
    );
}

export default Topbar;
