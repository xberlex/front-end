const BASE_URL = "http://localhost:3000/requerimentos";

async function listarRequerimentos() {
    const resposta = await fetch(BASE_URL);

    if (!resposta.ok) {
        throw new Error("Não foi possível carregar os requerimentos.");
    }

    return resposta.json();
}

async function cadastrarRequerimento(requerimento) {
    const resposta = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requerimento),
    });

    if (!resposta.ok) {
        throw new Error("Não foi possível cadastrar o requerimento.");
    }

    return resposta.json();
}

export { cadastrarRequerimento, listarRequerimentos };
