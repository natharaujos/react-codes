import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent titulo="Olá Mundo" />
      </header>
    </div>
  );
}

export default App;
