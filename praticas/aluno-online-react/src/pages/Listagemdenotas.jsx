function Notas() {
    const notas2026 = [
        { disciplina: "BI e Data Warehousing", a1: "-", a2: "-", a3: "-", mencao: "SR" },
        { disciplina: "Construção de Frontend", a1: "-", a2: "-", a3: "-", mencao: "SR" },
        { disciplina: "Manutenção de Software e DevOps", a1: "-", a2: "-", a3: "-", mencao: "SR" }
    ];

    const notas2025 = [
        { disciplina: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "-", mencao: "MM" },
        { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "-", mencao: "MM" },
        { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "-", mencao: "MS" }
    ];

    return (
        <section className="page-section">
            <h2>Minhas Notas</h2>
            <p>Histórico de notas por semestre</p>

            <TabelaNotas semestre="2026.1" notas={notas2026} />
            <TabelaNotas semestre="2025.2" notas={notas2025} />
        </section>
    );
}

function TabelaNotas({ semestre, notas }) {
    return (
        <article className="table-card">
            <h3>{semestre}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Disciplina</th>
                        <th>A1</th>
                        <th>A2</th>
                        <th>A3</th>
                        <th>Menção</th>
                    </tr>
                </thead>
                <tbody>
                    {notas.map((item) => (
                        <tr key={`${semestre}-${item.disciplina}`}>
                            <td>{item.disciplina}</td>
                            <td>{item.a1}</td>
                            <td>{item.a2}</td>
                            <td>{item.a3}</td>
                            <td>{item.mencao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}

export default Notas;