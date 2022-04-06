import logo from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>What word do you want to look up?</h1>
        </header>
        <main>
          <Dictionary />
        </main>
      </div>
    </div>
  );
}
