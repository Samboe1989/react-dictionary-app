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
        <footer>
          <p>
            This project was coded by Samantha Boersma and is
            <a
              class="bottomlink"
              href="https://github.com/Samboe1989/react-dictionary-app"
              target="_blank"
              title="Github page"
              rel="noreferrer"
            >
              &nbsp;open-Sourced on GitHub
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
