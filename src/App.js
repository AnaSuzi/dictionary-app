import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        dictionary
        <div className="Undertitle">
          <i className="bi bi-search"></i> ... look for your word
        </div>
      </header>
      <main>
        <br />
        <Dictionary defaultKeyword="ocean" />
      </main>
      <br />
      <footer className="info">
        <a
          className="link"
          href="https://github.com/AnaSuzi/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>{" "}
        by Ana Caserman
      </footer>
    </div>
  );
}
