import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null);
    const [logado, setLogado] = useState(false);

    const login = () => {
        setUsuario({ nome: "Marcos" });
        setLogado(true);
    }
    
    const logout = ( dados ) => {
        setUsuario(null);
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };