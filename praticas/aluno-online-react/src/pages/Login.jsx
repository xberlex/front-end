import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleEntrar = (event) => {
        event.preventDefault();

        login({
            nome: email.split("@")[0] || "Aluno",
            email,
            username: email,
            password: senha,
        });

        navigate("/");
    };

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="login-brand">
                    <img src="/avatar.svg" alt="Avatar do aluno" />
                    <h1>Aluno Online</h1>
                </div>

                <form id="login-form" onSubmit={handleEntrar}>
                    <label htmlFor="email">Matrícula</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Digite sua matrícula"
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        id="senha"
                        name="senha"
                        type="password"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                        placeholder="Digite sua senha"
                    />

                    <button id="btn-entrar" type="submit">
                        Entrar
                    </button>
                </form>

                <p className="login-security-message">
                    Seus dados estão protegidos e serão usados apenas para acessar o portal.
                </p>
            </section>
        </main>
    );
}

export default Login;
