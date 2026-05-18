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
        <>
            <h1>Minhas Faltas</h1>
            <h2>Histórico de Faltas por Semestre</h2>
            <TabelaFaltas semestre="2026.1" faltas={faltas2026} />
            <TabelaFaltas semestre="2025.2" faltas={faltas2025} />
        </>
    );
}

function TabelaFaltas({ semestre, faltas }) {
    return (
        <article>
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
