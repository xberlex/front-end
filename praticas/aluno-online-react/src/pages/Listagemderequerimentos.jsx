import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Requerimentos() {
    const requerimentos = [
        { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
        { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
        { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
        { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
        { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido" }
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '2rem', fontFamily: 'sans-serif', color: '#303030', overflowY: 'auto' }}>

                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#202020' }}>Meus Requerimentos</h1>
                    <img src={avatar} alt="imagem do avatar" style={{ width: '3rem', height: '3rem' }} />
                </header>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Faça solicitações online para a secretaria
                </h2>

                <article style={{ border: '1px solid #e9e9e9', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', background: 'white' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#303030' }}>
                        <thead style={{ background: '#e9e9e9' }}>
                            <tr>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '40%' }}>Tipo de Requerimento</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '30%' }}>Data de Solicitação</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '30%' }}>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requerimentos.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'left' }}>{item.tipo}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'left' }}>{item.data}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'left' }}>{item.situacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </div>
    );
}

export default Requerimentos;