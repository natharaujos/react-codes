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

  adicionarComentario = () => {
    console.log("adicionando comentário");

    const novoComentario = {
      nome: 'Maria',
      email: 'maria@gmail.com',
      date: new Date(2022, 12, 20),
      mensagem: 'adicionando novo comentário de maria@gmail.com'
    }

    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({ comentarios: lista });

    this.setState({
      // usando spread operator (MUITO ÚTIL!!!)
      comentarios: [ ...this.state.comentarios, novoComentario]
    })
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

        <button onClick={this.adicionarComentario} >Adicionar um comentário</button>
      </div>
    );
  }
}

export default App;
