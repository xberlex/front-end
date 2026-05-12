function Requerimentos() {
    const requerimentos = [
        { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
        { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
        { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
        { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
        { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido" }
    ];

    return (
        <section className="page-section">
            <h2>Meus Requerimentos</h2>
            <p>Solicitações online para a secretaria</p>

            <article className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>Tipo de Requerimento</th>
                            <th>Data de Solicitação</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requerimentos.map((item) => (
                            <tr key={`${item.tipo}-${item.data}`}>
                                <td>{item.tipo}</td>
                                <td>{item.data}</td>
                                <td>{item.situacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </section>
    );
}

export default Requerimentos;