function Card() {
    return (
        <div className="dashboard-grid">
            <article className="card">
                <h3>Mural de Avisos</h3>
                <ul>
                    <li>Inscrição para o projeto de extensão</li>
                    <li>Eleição para representante de turma</li>
                </ul>
            </article>

            <article className="card">
                <h3>Calendário Acadêmico</h3>
                <ul>
                    <li>23/02 - Início do período letivo 2026-1</li>
                    <li>25/04 - Prazo final para aplicação da P1</li>
                    <li>23/06 - Prazo final para aplicação da P2</li>
                    <li>04/07 - Fim do período letivo 2026-1</li>
                </ul>
            </article>

            <article className="card">
                <h3>Minhas Disciplinas</h3>
                <ul>
                    <li>Construção de Frontend</li>
                    <li>BI e Data Warehousing</li>
                    <li>Manutenção de Software e DevOps</li>
                    <li>Governança de TI</li>
                    <li>Direitos Humanos e Ambientais</li>
                </ul>
            </article>
        </div>
    );
}

export default Card;