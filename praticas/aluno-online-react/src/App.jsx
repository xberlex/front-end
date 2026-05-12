import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Perfil from "./pages/Perfil"
import Settings from "./pages/Settings"
import Erro404 from './pages/Erro404'
import Layout from './layouts/Layouts'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ListagemdeBoletos from './pages/Listagemdeboletos'
import ListagemdeFaltas from './pages/Listagemdefaltas'
import ListagemdeNotas from './pages/Listagemdenotas'
import Listagemderequerimentos from './pages/Listagemderequerimentos'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="perfil/:id" element={<Perfil />} />
        <Route path="settings" element={<Settings />} />
        <Route path="boletos" element={<ListagemdeBoletos />} />
        <Route path="faltas" element={<ListagemdeFaltas />} />
        <Route path="notas" element={<ListagemdeNotas />} />
        <Route path="requerimentos" element={<Listagemderequerimentos />} />
        <Route path="*" element={<Erro404 />} />
      </Route>
    </Routes>
  );
}

export default App;