import React, { Component } from 'react';
import './App.css';
import Comentario from './components/Comentario';

class App extends Component {

  state = {
    comentarios: [
      {
        nome: 'Jõao',
        email: 'joao@gmail.com',
        date: new Date(2020, 3, 22),
        mensagem: 'Olá, tudo bem sim....'
      },
      {
        nome: 'Jonas',
        email: 'jonas@gmail.com',
        date: new Date(2021, 4, 11),
        mensagem: 'Olá, tudo bem sim mano....'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario key={indice} name={comentario.nome} email={comentario.email} date={comentario.date}>
            {comentario.mensagem}
          </Comentario>
        ))}
      </div>
    );
  }
}

export default App;
