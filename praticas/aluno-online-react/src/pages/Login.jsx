import logo from "../assets/learn.svg";
import FormLogin from "../components/FormLogin";

function LoginPage({ navegaPara }) {
    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-4 font-sans">
            <div className="bg-white border border-gray-200 rounded-2xl p-10 w-full max-w-[420px] flex flex-col items-center shadow-sm">
                <img
                    src={logo}
                    alt="Logo Aluno Online"
                    className="w-14 h-14 mb-4"
                />
                <h1 className="text-2xl font-bold text-[#1a1a1a] mb-7">
                    Aluno Online
                </h1>
                <FormLogin navegaPara={navegaPara} />
            </div>
            <p className="mt-6 text-sm text-gray-400">
                © 2026. Todos os direitos reservados.
            </p>
        </div>
    );
}

export default LoginPage;