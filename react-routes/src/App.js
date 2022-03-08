import React from "react";
import "./App.css";
import Usuarios from "./components/Usuarios/Usuarios";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import AdicionarUsuario from "./components/AdicionarUsuario/AdicionarUsuario";
import Home from "./components/Home/Home";
import PaginaNaoEncontrada from "./components/PaginaNaoEncontrada/PaginaNaoEncontrada";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Início</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuários</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="/adicionar" element={<AdicionarUsuario />} />
            <Route path="/*" element={<PaginaNaoEncontrada />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
