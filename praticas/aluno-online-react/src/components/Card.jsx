function Card(props) {
    return (
        <div className="flex flex-col gap-6 w-full">

            <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                    <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                        {props.titulo}
                    </h3>
                    <ul className="p-4 flex flex-col gap-2">
                        {props.itens.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </ul>
                </article>
            </section>

            <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                    <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                        Calendário Acadêmico
                    </h3>
                    <ul className="p-4 flex flex-col gap-2">
                        <p>23/02 - Início do período letivo 2026-1</p>
                        <p>25/04 - Prazo final para aplicação da P1</p>
                        <p>23/06 - Prazo final para aplicação da P2</p>
                        <p>04/07 - Fim do período letivo 2026-1</p>
                    </ul>
                </article>
            </section>

            <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                    <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                        Minhas Disciplinas
                    </h3>
                    <ul className="p-4 flex flex-col gap-2">
                        <p>Construção de Frontend</p>
                        <p>BI e Data Warehousing</p>
                        <p>Manutenção de Software e DevOps</p>
                        <p>Governança de TI</p>
                        <p>Direitos Humanos e Ambientais</p>
                    </ul>
                </article>
            </section>

        </div>
    );
}

export default Card;