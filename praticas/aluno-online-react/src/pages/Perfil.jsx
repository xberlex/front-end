import { useParams } from "react-router-dom";

function Perfil() {
    const { id = "1" } = useParams();

    return (
        <section className="page-section">
            <h2>Perfil do Aluno</h2>
            <div className="info-list">
                <p><strong>Matrícula:</strong> {id}</p>
                <p><strong>Nome:</strong> Aluno Exemplo</p>
                <p><strong>Curso:</strong> Análise e Desenvolvimento de Sistemas</p>
                <p><strong>Semestre:</strong> 2026.1</p>
            </div>
        </section>
    );
}

export default Perfil;