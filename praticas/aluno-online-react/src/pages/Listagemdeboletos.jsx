import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Boletos() {
    const boletos = [
        { vencimento: "19/01/2026", valor: "500,00", situacao: "Pago" },
        { vencimento: "19/02/2026", valor: "500,00", situacao: "Em atraso" },
        { vencimento: "19/03/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/04/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/05/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/06/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/07/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/08/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/09/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/10/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/11/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/12/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/01/2027", valor: "500,00", situacao: "A Pagar" }
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
            <Sidebar />

            <main style={{ flex: 1, padding: '2rem', fontFamily: 'sans-serif', color: '#303030', overflowY: 'auto' }}>

                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#202020' }}>Meus Boletos</h1>
                    <img src={avatar} alt="imagem do avatar" style={{ width: '3rem', height: '3rem' }} />
                </header>

                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    Histórico de Pagamentos
                </h2>

                <article style={{ border: '1px solid #e9e9e9', borderRadius: '8px', overflow: 'hidden', marginBottom: '2rem', background: 'white' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#303030' }}>
                        <thead style={{ background: '#e9e9e9' }}>
                            <tr>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '33%' }}>Vencimento</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '33%' }}>Valor R$</th>
                                <th style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold', border: '1px solid #e9e9e9', width: '33%' }}>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boletos.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.vencimento}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.valor}</td>
                                    <td style={{ padding: '12px', border: '1px solid #e9e9e9' }}>{item.situacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </div>
    );
}

export default Boletos;