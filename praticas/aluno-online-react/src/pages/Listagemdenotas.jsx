import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Notas() {
    const notas2026_1 = [
        { disciplina: "BI e Data Warehousing", a1: "", a2: "", a3: "", mencao: "SR" },
        { disciplina: "Construção de Frontend", a1: "", a2: "", a3: "", mencao: "SR" },
        { disciplina: "Manutenção de Software e Devops", a1: "", a2: "", a3: "", mencao: "SR" }
    ];

    const notas2025_2 = [
        { disciplina: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "", mencao: "MM" },
        { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "", mencao: "MM" },
        { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "", mencao: "MS" }
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '2rem', fontFamily: 'sans-serif', color: '#303030', overflowY: 'auto' }}>

                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#202020' }}>Minhas Notas</h1>
                    <img src={avatar} alt="imagem do avatar" style={{ width: '3rem', height: '3rem' }} />
                </header>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Histórico de Notas por Semestre
                </h2>

                <article style={{ border: '1px solid #e9e9e9', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', background: 'white' }}>
                    <div style={{ background: '#e9e9e9', padding: '1rem 1rem 0.5rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#303030' }}>
                        2026.1
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#303030' }}>
                        <thead style={{ background: '#e9e9e9' }}>
                            <tr>
                                <th style={{ padding: '12px', textAlign: 'left', fontWeight: 'bold', border: '1px solid #e9e9e9' }}>Disciplina</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '10%' }}>A1</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '10%' }}>A2</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '10%' }}>A3</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '15%' }}>Menção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notas2026_1.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.disciplina}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.a1}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.a2}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.a3}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.mencao}</td>
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
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '10%' }}>A1</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '10%' }}>A2</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '10%' }}>A3</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '15%' }}>Menção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notas2025_2.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.disciplina}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.a1}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.a2}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.a3}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9', textAlign: 'center' }}>{item.mencao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </div>
    );
}

export default Notas;