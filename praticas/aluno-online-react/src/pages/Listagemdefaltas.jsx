import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Faltas() {
    const faltas2026_1 = [
        { disciplina: "BI e Data Warehousing", faltas: 0, presenca: "100%" },
        { disciplina: "Construção de Frontend", faltas: 0, presenca: "100%" },
        { disciplina: "Manutenção de Software e Devops", faltas: 0, presenca: "100%" }
    ];

    const faltas2025_2 = [
        { disciplina: "Construção de Backend", faltas: 27, presenca: "87.5%" },
        { disciplina: "Estrutura de Dados", faltas: 9, presenca: "85%" },
        { disciplina: "Gerenciamento de Projetos", faltas: 10.5, presenca: "82.5%" }
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '2rem', fontFamily: 'sans-serif', color: '#303030', overflowY: 'auto' }}>

                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#202020' }}>Minhas Faltas</h1>
                    <img src={avatar} alt="imagem do avatar" style={{ width: '3rem', height: '3rem' }} />
                </header>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Histórico de Faltas por Semestre
                </h2>

                <article style={{ border: '1px solid #e9e9e9', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', background: 'white' }}>
                    <div style={{ background: '#e9e9e9', padding: '1rem 1rem 0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#303030' }}>
                        2026.1
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#303030' }}>
                        <thead style={{ background: '#e9e9e9' }}>
                            <tr>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', border: '1px solid #e9e9e9' }}>Disciplina</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '20%' }}>Total de Faltas</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '20%' }}>% de Presença</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faltas2026_1.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.disciplina}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.faltas}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.presenca}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <article style={{ border: '1px solid #e9e9e9', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', background: 'white' }}>
                    <div style={{ background: '#e9e9e9', padding: '1rem 1rem 0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#303030' }}>
                        2025.2
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#303030' }}>
                        <thead style={{ background: '#e9e9e9' }}>
                            <tr>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', border: '1px solid #e9e9e9' }}>Disciplina</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '20%' }}>Total de Faltas</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '20%' }}>% de Presença</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faltas2025_2.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.disciplina}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.faltas}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.presenca}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </div>
    );
}

export default Faltas;