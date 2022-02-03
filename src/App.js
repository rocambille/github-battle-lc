import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Fight from "./Fight";
import About from "./About";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Fight</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Fight />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
