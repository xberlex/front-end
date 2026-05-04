import avatar from '../assets/avatar.svg'

function Topbar() {
    return (
        <header className="topbar">
            <h1>Olá, Aluno!</h1>
            <img src={avatar} alt="imagem do avatar" />
        </header>
    )

}

export default Topbar;