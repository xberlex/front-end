const avisos = [
    "Inscrição para o projeto de extensão",
    "Eleição para representante de turma",
];

const calendario = [
    "23/02 - Início do período letivo 2026-1",
    "25/04 - Prazo final para aplicação da P1",
    "23/06 - Prazo final para aplicação da P2",
    "04/07 - Fim do período letivo 2026-1",
];

const disciplinas = [
    "Construção de Frontend",
    "BI e Data Warehousing",
    "Manutenção de Software e DevOps",
    "Governança de TI",
    "Direitos Humanos e Ambientais",
];

function Card({ titulo = "Mural de Avisos", itens = avisos }) {
    return (
        <div className="dashboard-grid">
            <CardItem titulo={titulo} itens={itens} />
            <CardItem titulo="Calendário Acadêmico" itens={calendario} />
            <CardItem titulo="Minhas Disciplinas" itens={disciplinas} />
        </div>
    );
}

function CardItem({ titulo, itens }) {
    return (
        <article className="card">
            <h3>{titulo}</h3>
            <ul>
                {itens.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
}

export default Card;
