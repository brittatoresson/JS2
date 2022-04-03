import "./App.css";
import FilterInput from "./Components/FilterInput.jsx";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddExercise from "./Components/AddExercise";
import { store } from "./index";
import Home from "./Pages/Home";
import History from "./Pages/History";

const redux = require("redux");

function App() {
  const API = "http://localhost:6001/data.json";
  const [state, setState] = useState([]);
  async function fetchFunction() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setState(data);
    } catch (err) {
      throw err;
    }
  }
  //dispatch action state
  store.dispatch({
    type: "FETCH",
    payload: state,
  });
  useEffect(() => {
    //kalla på fetchfunktionen
    fetchFunction();
  }, []);

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<FilterInput />}></Route>
          <Route path="/add" element={<AddExercise />}></Route>
          <Route path="/history" element={<History />}></Route>
        </Routes>
        <section id="mainNav">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
          <Link to="/add">Add</Link>
          <Link to="/history">History</Link>
        </section>
      </BrowserRouter>
    </main>
  );
}

export default App;
