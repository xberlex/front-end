function Faltas() {
    const faltas2026 = [
        { disciplina: "BI e Data Warehousing", faltas: 0, presenca: "100%" },
        { disciplina: "Construção de Frontend", faltas: 0, presenca: "100%" },
        { disciplina: "Manutenção de Software e DevOps", faltas: 0, presenca: "100%" }
    ];

    const faltas2025 = [
        { disciplina: "Construção de Backend", faltas: 27, presenca: "87.5%" },
        { disciplina: "Estrutura de Dados", faltas: 9, presenca: "85%" },
        { disciplina: "Gerenciamento de Projetos", faltas: 10.5, presenca: "82.5%" }
    ];

    return (
        <section className="page-section">
            <h2>Minhas Faltas</h2>
            <p>Histórico de faltas por semestre</p>

            <TabelaFaltas semestre="2026.1" faltas={faltas2026} />
            <TabelaFaltas semestre="2025.2" faltas={faltas2025} />
        </section>
    );
}

function TabelaFaltas({ semestre, faltas }) {
    return (
        <article className="table-card">
            <h3>{semestre}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>Total de Faltas</th>
                        <th>% de Presença</th>
                    </tr>
                </thead>
                <tbody>
                    {faltas.map((item) => (
                        <tr key={`${semestre}-${item.disciplina}`}>
                            <td>{item.disciplina}</td>
                            <td>{item.faltas}</td>
                            <td>{item.presenca}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}

export default Faltas;