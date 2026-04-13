function Card() {
    return (
        <div className="flex flex-col gap-6 w-full">

            <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                    <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                        Mural de Avisos
                    </h3>
                    <ul className="p-4 flex flex-col gap-2">
                        <li>Inscrição para o projeto de extensão</li>
                        <li>Eleição para representante de turma</li>
                    </ul>
                </article>
            </section>

            <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                    <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                        Calendário Acadêmico
                    </h3>
                    <ul className="p-4 flex flex-col gap-2">
                        <li>23/02 - Início do período letivo 2026-1</li>
                        <li>25/04 - Prazo final para aplicação da P1</li>
                        <li>23/06 - Prazo final para aplicação da P2</li>
                        <li>04/07 - Fim do período letivo 2026-1</li>
                    </ul>
                </article>
            </section>

            <section className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                    <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                        Minhas Disciplinas
                    </h3>
                    <ul className="p-4 flex flex-col gap-2">
                        <li>Construção de Frontend</li>
                        <li>BI e Data Warehousing</li>
                        <li>Manutenção de Software e DevOps</li>
                        <li>Governança de TI</li>
                        <li>Direitos Humanos e Ambientais</li>
                    </ul>
                </article>
            </section>

        </div>
    );
}


export default Card;