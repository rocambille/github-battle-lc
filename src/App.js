import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <button
      onClick={() => {
        fetch("https://api.github.com/users/rocambille")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      }}
    >
      Go
    </button>
  );
}

export default App;
