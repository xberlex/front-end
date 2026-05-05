import { useParams } from "react-router";

function Perfil() {
    const { id } = useParams();

    // buscar o usuário pelo id

    return (
        <h1>Perfil do Usuário {id}</h1>
    );
}

export default Perfil;