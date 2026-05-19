import { Link } from "react-router-dom";

function Erro404() {
    return (
        <section className="page-section">
            <h2>Página não encontrada</h2>
            <p>O endereço acessado não existe no Portal do Aluno.</p>
            <Link className="button-link" to="/dashboard">Voltar para o Dashboard</Link>
        </section>
    );
}

export default Erro404;