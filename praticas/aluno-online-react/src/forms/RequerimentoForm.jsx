import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function RequerimentoForm() {
    const dataRequerimento = new Date().toLocaleDateString("pt-BR");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            tipo: "",
            descricao: "",
            dataRequerimento,
        },
    });

    function salvarRequerimento(dados) {
        console.log("Novo requerimento:", {
            ...dados,
            dataRequerimento,
        });
        reset();
    }

    return (
        <section className="form-page">
            <div className="page-header">
                <div>
                    <h1>Novo Requerimento</h1>
                    <p>Preencha os dados abaixo para registrar uma solicitação.</p>
                </div>
            </div>

            <form className="requerimento-form" onSubmit={handleSubmit(salvarRequerimento)}>
                <div className="form-field">
                    <label htmlFor="tipo">Tipo de Requerimento</label>
                    <select
                        id="tipo"
                        {...register("tipo", {
                            required: "Tipo é obrigatório",
                        })}
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="Revisão de Menção">Revisão de Menção</option>
                        <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
                        <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
                        <option value="Mudança de Turno">Mudança de Turno</option>
                        <option value="Renovação de Matrícula">Renovação de Matrícula</option>
                    </select>
                    {errors.tipo && <p className="form-error">{errors.tipo.message}</p>}
                </div>

                <div className="form-field">
                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        id="descricao"
                        rows="6"
                        placeholder="Descreva sua solicitação"
                        {...register("descricao", {
                            required: "Descrição é obrigatória",
                            minLength: {
                                value: 10,
                                message: "A descrição deve ter pelo menos 10 caracteres.",
                            },
                        })}
                    />
                    {errors.descricao && <p className="form-error">{errors.descricao.message}</p>}
                </div>
 
                <div className="form-field form-field-inline">
                    <label htmlFor="dataRequerimento">Data do Requerimento</label>
                    <input
                        id="dataRequerimento"
                        type="text"
                        readOnly
                        aria-readonly="true"
                        {...register("dataRequerimento", {
                            validate: (valor) =>
                                valor === dataRequerimento ||
                                "A data do requerimento não pode ser alterada.",
                        })}
                    />
                    {errors.dataRequerimento && (
                        <p className="form-error">{errors.dataRequerimento.message}</p>
                    )}
                </div>

                <div className="form-actions">
                    <Link to="/requerimentos">
                        Cancelar
                    </Link>
                    <button type="submit" disabled={isSubmitting}>
                        Salvar
                    </button>
                </div>
            </form>
        </section>
    );
}

export default RequerimentoForm;
