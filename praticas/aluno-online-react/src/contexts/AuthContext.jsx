/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
    UNAUTHORIZED_EVENT,
    limparSessao,
    loginUsuario,
    obterSessao,
} from "../services/authService";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [sessao, setSessao] = useState(() => obterSessao());

    const autenticado = Boolean(sessao?.token); 
    const usuario = sessao?.usuario || null;
    const token = sessao?.token || null;

    async function login(email, senha) {
        const novaSessao = await loginUsuario(email, senha);
        setSessao(novaSessao);
        return novaSessao;
    }

    function logout() {
        limparSessao();
        setSessao(null);
    }

    useEffect(() => {
        function handleUnauthorized() {
            setSessao(null);
        }

        window.addEventListener(UNAUTHORIZED_EVENT, handleUnauthorized);

        return () => {
            window.removeEventListener(UNAUTHORIZED_EVENT, handleUnauthorized);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ autenticado, usuario, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const contexto = useContext(AuthContext);

    if (!contexto) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider.");
    }

    return contexto;
}

export { AuthProvider, useAuth };
