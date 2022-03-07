import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { numero: 5 };
    this.adicionarNumero = this.adicionarNumero.bind(this);
    console.log("constructor...");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps...");
    console.log(props);
    console.log(state);
    console.log("oi");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate...");
    console.log("estado atual", this.state);
    console.log("próximo estado", nextState);
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  adicionarNumero() {
    console.log("setState...");
    let numeroAtual = this.state.numero;
    numeroAtual += 1;
    this.setState({ numero: numeroAtual });
  }

  render() {
    console.log("render...");
    return (
      <div>
        <p>{this.props.titulo}</p>
        <p>{this.state.numero}</p>
        <button onClick={this.adicionarNumero}>Adicionar Número</button>
      </div>
    );
  }
}

export default MyComponent;
