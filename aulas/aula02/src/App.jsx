import './App.css';
import logo from "./assets/learn.svg";

// ALT + SHIFT + F = Formata o código

function App() {
  // JSX = JS + XML
  return (
    <main>
      {/* chaves no JSW aceita o código JS*/};
      <img src={logo} alt="Logotipo da aplicação"/>
      <h1>Aluno online</h1>
      <label htmlfor="Matricula">Matricula:</label>
      <input type="number" id="Matricula" name="Matricula" />
      <p id="MatriculaErro"></p>
      <label htmlfor="senha">Senha:</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;