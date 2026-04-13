import Card from "./Card";
import Topbar from "./Topbar";

function Main (){
    return (
        <main className="main-content">
            <Topbar/>
            <h2>Bem-Vindo ao Portal do Aluno</h2>
            <Card/>
        </main>
    );
}

export default Main;