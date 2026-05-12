import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider ({ children }) {
    const [logado, setLogado] = useState(false);

    return (
        <AuthContext.Provider value={{ logado, setLogado }}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};