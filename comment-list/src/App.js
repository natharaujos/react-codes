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
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = (evento) => {

    evento.preventDefault();
    
    const novoComentario = { ...this.state.novoComentario, date: new Date() }

    // --- Sem o spread operator ---
    // let lista = this.state.comentarios;
    // lista.push(novoComentario);
    // this.setState({ comentarios: lista });

    this.setState({
      // --- usando spread operator --- (MUITO ÚTIL!!!)
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
    })
  }

  removerComentario = (comentario) => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario);
    this.setState({ comentarios: lista });
  }

  digitandoValor = (evento) => {
    const { name,value } = evento.target;
    this.setState({ novoComentario: {...this.state.novoComentario, [name]: value} })
  }

  render() {
    return (
      <div className="App">
        <h1>Meu Projeto</h1>

        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
            key={indice} 
            name={comentario.nome} 
            email={comentario.email} 
            date={comentario.date}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario}>
          <h2>Adicionar Comentário</h2>
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.digitandoValor}
              placeholder="Digite seu nome"/>
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              value={this.state.novoComentario.email} 
              onChange={this.digitandoValor}
              placeholder="Digite seu email"/>
          </div>
          <div>
            <textarea 
              name="mensagem" 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitandoValor}
              rows="4" 
              placeholder="Digite sua mensagem" />
          </div>
          <button type="submit">Adiconar Comentário</button>
        </form>
      </div>
    );
  }
}

export default App;