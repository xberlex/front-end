import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        navigate("/dashboard");
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="login-brand">
                    <img src="/avatar.svg" alt="Avatar do aluno" />
                    <h1>Aluno Online</h1>
                </div>
                <p>Entre para acessar seu portal acadêmico.</p>

                <form id="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="matricula">Matrícula</label>
                    <input id="matricula" name="matricula" type="text" placeholder="Digite sua matrícula" />

                    <label htmlFor="senha">Senha</label>
                    <input id="senha" name="senha" type="password" placeholder="Digite sua senha" />

                    <button id="btn-entrar" type="submit">Entrar</button>
                </form>
            </section>
        </main>
    );
}

export default Login;
