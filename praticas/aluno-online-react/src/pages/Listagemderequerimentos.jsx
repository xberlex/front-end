import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarRequerimentos } from "../services/requerimentoService";

function Requerimentos() {
    const [requerimentos, setRequerimentos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function carregarRequerimentos() {
            try {
                const dados = await listarRequerimentos();
                setRequerimentos(dados);
            } catch (error) {
                setErro(error.message);
            } finally {
                setCarregando(false);
            }
        }

        carregarRequerimentos();
    }, []);

    return (
        <>
            <div className="page-header">
                <div>
                    <h1>Meus Requerimentos</h1>
                    <h2>Faça solicitações online para a secretaria</h2>
                </div>
                <Link className="button-primary" to="/requerimentos/novo">
                    + Novo Requerimento
                </Link>
            </div>

            {carregando && <p>Carregando requerimentos...</p>}
            {erro && <p className="form-error">{erro}</p>}

            {!carregando && !erro && (
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
                                <tr key={item.id}>
                                    <td>{item.tipo}</td>
                                    <td>{item.dataRequerimento}</td>
                                    <td>{item.situacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>
            )}
        </>
    );
}

export default Requerimentos;
