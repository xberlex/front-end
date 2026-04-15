import Card from "./Card";
import Topbar from "./Topbar";

function Main (){
    return (
        <main className="flex flex-col max-w-screen">
            <Topbar/>
            <h2>Bem-vindo ao portal do aluno</h2>
            <section>
            <Card titulo="Mural de Avisos"/>
            <Card titulo="Calendário Acadêmico"/>
            <Card titulo="Minhas Disciplinas"/>
            </section>
        </main>
    );
}

export default Main;