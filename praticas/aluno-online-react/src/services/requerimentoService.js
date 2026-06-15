import { notificarSessaoExpirada, obterToken } from "./authService.js";

const BASE_URL = "http://127.0.0.1:3000/requerimentos";

function criarErroUnauthorized() {
    const erro = new Error("Sessao expirada. Faca login novamente.");
    erro.status = 401;
    return erro;
}

function obterHeadersAutenticados(headers = {}) {
    const token = obterToken();

    if (!token) {
        notificarSessaoExpirada();
        throw criarErroUnauthorized();
    }

    return {
        ...headers,
        Authorization: `Bearer ${token}`,
    };
}

function tratarErroAutenticacao(resposta) {
    if (resposta.status === 401) {
        notificarSessaoExpirada();
        throw criarErroUnauthorized();
    }
}

async function listarRequerimentos() {
    const resposta = await fetch(BASE_URL, {
        headers: obterHeadersAutenticados(),
    });

    tratarErroAutenticacao(resposta);

    if (!resposta.ok) {
        throw new Error("Nao foi possivel carregar os requerimentos.");
    }

    return resposta.json();
}

async function cadastrarRequerimento(requerimento) {
    const resposta = await fetch(BASE_URL, {
        method: "POST",
        headers: obterHeadersAutenticados({
            "Content-Type": "application/json",
        }),
        body: JSON.stringify(requerimento),
    });

    tratarErroAutenticacao(resposta);

    if (!resposta.ok) {
        throw new Error("Nao foi possivel cadastrar o requerimento.");
    }

    return resposta.json();
}

export { cadastrarRequerimento, listarRequerimentos };
