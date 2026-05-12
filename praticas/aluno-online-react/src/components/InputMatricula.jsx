function InputMatricula({ matricula, erro, mudaValor }) {
    return (
        <section className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm text-[#1a1a1a] mb-1">
                E-mail
            </label>
            <input
                className={`border rounded-md px-3 py-2 outline-none text-[15px] w-full transition-colors
                    ${erro
                        ? "border-[#cc0000] focus:border-[#cc0000]"
                        : "border-gray-300 focus:border-gray-500"
                    }`}
                value={matricula}
                onChange={mudaValor}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
            />
            {erro && (
                <p className="text-[#cc0000] text-sm mt-1">{erro}</p>
            )}
        </section>
    );
}

export default InputMatricula;