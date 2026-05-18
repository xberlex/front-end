function InputSenha({ senha, erro, mudaValor }) {
    return (
        <section className="flex flex-col w-full">
            <label htmlFor="senha" className="text-sm text-[#1a1a1a] mb-1">
                Senha
            </label>
            <input
                className={`border rounded-md px-3 py-2 outline-none text-[15px] w-full transition-colors
                    ${erro
                        ? "border-[#cc0000] focus:border-[#cc0000]"
                        : "border-gray-300 focus:border-gray-500"
                    }`}
                value={senha}
                onChange={mudaValor}
                type="password"
                id="senha"
                name="senha"
                autoComplete="current-password"
            />
            {erro && (
                <p className="text-[#cc0000] text-sm mt-1">{erro}</p>
            )}
        </section>
    );
}

export default InputSenha;