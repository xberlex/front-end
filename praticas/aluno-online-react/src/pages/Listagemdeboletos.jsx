function ListagemdeBoletos() {
    const boletos = [
        { vencimento: "19/01/2026", valor: "500,00", situacao: "Pago" },
        { vencimento: "19/02/2026", valor: "500,00", situacao: "Em atraso" },
        { vencimento: "19/03/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/04/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/05/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/06/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/07/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/08/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/09/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/10/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/11/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/12/2026", valor: "500,00", situacao: "A pagar" },
        { vencimento: "19/01/2027", valor: "500,00", situacao: "A pagar" }
    ];

    return (
        <section className="page-section">
            <h2>Meus Boletos</h2>
            <p>Histórico de pagamentos</p>

            <article className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>Vencimento</th>
                            <th>Valor R$</th>
                            <th>Situação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boletos.map((item) => (
                            <tr key={item.vencimento}>
                                <td>{item.vencimento}</td>
                                <td>{item.valor}</td>
                                <td>{item.situacao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </section>
    );
}

export default ListagemdeBoletos;