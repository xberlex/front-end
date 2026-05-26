import { Link } from "react-router-dom";

function Requerimentos() {
    const requerimentos = [
        { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
        { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
        { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
        { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
        { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido" }
    ];

    return (
        <>
            <div className="page-header"> 
                <div>         
                    <h1>Meus Requerimentos</h1>
                    <h2>Faça solicitações online para a secretaria</h2>
                </div>
                <Link className="button-primary" to="/requerimentos/novo">
                    Novo Requerimento
                </Link>
            </div>

            <article>
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
        </>
    );
}

export default Requerimentos;
