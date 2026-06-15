import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        setErro("");
        setCarregando(true);

        try {
            await login(email, senha);
            navigate("/", { replace: true });
        } catch (error) {
            setErro(error.message);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="login-brand">
                    <img src="/avatar.svg" alt="Avatar do aluno" />
                    <h1>Aluno Online</h1>
                </div>
                <p>Entre para acessar seu portal academico.</p>
                <p className="login-security">Seus dados estao protegidos por sessao autenticada.</p>

                <form id="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">E-mail</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        id="senha"
                        name="senha"
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />

                    {erro && <p className="form-error">{erro}</p>}

                    <button id="btn-entrar" type="submit" disabled={carregando}>
                        {carregando ? "Entrando..." : "Entrar"}
                    </button>
                </form>
            </section>
        </main>
    );
}

export default Login;
