import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        dictionary
        <div className="Undertitle">look for your word ...</div>
      </header>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}
