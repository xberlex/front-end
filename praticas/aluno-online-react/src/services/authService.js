const BASE_URL = "http://127.0.0.1:3000";
const STORAGE_KEY = "aluno-online-auth";
const UNAUTHORIZED_EVENT = "auth:unauthorized";

function gerarToken(usuario) {
    const conteudo = `${usuario.email}:${Date.now()}:${Math.random()}`;
    return btoa(conteudo);
}

function salvarSessao(sessao) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessao));
}

function obterSessao() {
    const sessaoSalva = localStorage.getItem(STORAGE_KEY);

    if (!sessaoSalva) {
        return null;
    }

    try {
        return JSON.parse(sessaoSalva);
    } catch {
        limparSessao();
        return null;
    }
}

function obterToken() {
    return obterSessao()?.token || null;
}

function limparSessao() {
    localStorage.removeItem(STORAGE_KEY);
}

function notificarSessaoExpirada() {
    limparSessao();
    window.dispatchEvent(new Event(UNAUTHORIZED_EVENT));
}

async function loginUsuario(email, senha) {
    const resposta = await fetch(`${BASE_URL}/usuarios?email=${encodeURIComponent(email)}`);

    if (!resposta.ok) {
        throw new Error("Nao foi possivel validar o usuario.");
    }

    const usuarios = await resposta.json();
    const usuarioEncontrado = usuarios.find((usuario) => usuario.senha === senha);

    if (!usuarioEncontrado) {
        throw new Error("E-mail ou senha invalidos.");
    }

    const usuarioSeguro = {
        id: usuarioEncontrado.id,
        nome: usuarioEncontrado.nome,
        email: usuarioEncontrado.email,
    };
    const sessao = {
        usuario: usuarioSeguro,
        token: gerarToken(usuarioSeguro),
    };

    salvarSessao(sessao);
    return sessao;
}

export {
    UNAUTHORIZED_EVENT,
    limparSessao,
    loginUsuario,
    notificarSessaoExpirada,
    obterSessao,
    obterToken,
    salvarSessao,
};
