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
        </header>
    );
}

export default Topbar;
