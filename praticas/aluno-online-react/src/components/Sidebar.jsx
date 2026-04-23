import Menu from "./Menu";
import logo from '../assets/learn.svg'

function Sidebar() {
    return (
        <aside className="sidebar">
            <figure className="logo">
                <img src={logo} alt="Imagem de um capelo" />
                <h1>Aluno Online</h1>
            </figure>
            <Menu />
        </aside>)
}

export default Sidebar;