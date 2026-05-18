import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListagemDeBoletos from "./pages/Listagemdeboletos";
import ListagemDeFaltas from "./pages/Listagemdefaltas";
import ListagemDeNotas from "./pages/Listagemdenotas";
import ListagemDeRequerimentos from "./pages/Listagemderequerimentos";
import Layout from "./layouts/Layouts";
import Login from "./pages/Login";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={autenticado ? <Navigate to="/" replace /> : <Login />}
      />

      <Route
        path="/"
        element={autenticado ? <Layout /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notas" element={<ListagemDeNotas />} />
        <Route path="faltas" element={<ListagemDeFaltas />} />
        <Route path="boletos" element={<ListagemDeBoletos />} />
        <Route path="requerimentos" element={<ListagemDeRequerimentos />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to={autenticado ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
