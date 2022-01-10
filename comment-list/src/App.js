import logo from './logo.svg';
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario name="Nathan" email="nathansaraujo191@gmail.com" date={new Date(2020, 3, 19)}>
        Opa, tudo bem, to aqui pra mandar uma mensagem dizendo que eu to fazendo um teste com esses emails aqui mano, tmj, é nois, together forever!
      </Comentario>
      <Comentario name="Jonas Joseph Victor" email="jonasjosephvictorious@gmail.com" date={new Date(2020, 3, 19)}>
        Opa, tudo bem, to aqui pra mandar uma mensagem dizendo que eu to fazendo um teste com esses emails aqui mano, tmj, é nois, together forever!
      </Comentario>
      <Comentario name="Ronaldo Nazário de Lima" email="fenomeno@gmail.com" date={new Date(2020, 3, 19)}>
        Opa, tudo bem, to aqui pra mandar uma mensagem dizendo que eu to fazendo um teste com esses emails aqui mano, tmj, é nois, together forever!
      </Comentario>
    </div>
  );
}

export default App;
