import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {
    return (
        <aside className="sidebar">
            <header className="logo">
                <img src={logo} alt="imagem da logo" />
                <h1>Aluno Online</h1>
            </header>
            <Menu />
        </aside>
    );
}

export default Sidebar;
