import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ListagemDeBoletos from "./pages/Listagemdeboletos";
import ListagemDeFaltas from "./pages/Listagemdefaltas";
import ListagemDeNotas from "./pages/Listagemdenotas";
import ListagemDeRequerimentos from "./pages/Listagemderequerimentos";
import Layout from "./layouts/Layouts";
import RequerimentoForm from "./forms/RequerimentoForm";
 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="notas" element={<ListagemDeNotas />} />
        <Route path="faltas" element={<ListagemDeFaltas />} />
        <Route path="boletos" element={<ListagemDeBoletos />} />
        <Route path="requerimentos">
          <Route index element={<ListagemDeRequerimentos />} />
          <Route path="novo" element={<RequerimentoForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
