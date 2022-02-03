import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>Fight</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <main>
        <figure className="card">
          <img
            className="card-img"
            src="https://avatars.githubusercontent.com/u/10051208?v=4"
            alt="me"
          />
          <figcaption className="card-content">
            <h1>me</h1>
          </figcaption>
        </figure>
      </main>
    </>
  );
}

export default App;
