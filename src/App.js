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
        <Dictionary defaultKeyword="summer" />
      </main>
      <br />
      <footer className="info">open-source code by Ana Caserman</footer>
    </div>
  );
}
