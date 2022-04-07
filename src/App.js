import "./App.css";
import FilterInput from "./Components/FilterInput.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAction } from "./Actions/exerciseAction";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddExercise from "./Components/AddExercise";
import Home from "./Pages/Home";
import History from "./Pages/History";
import RandomWod from "./Components/RandomWod";

const redux = require("redux");

function App() {
  const dispatch = useDispatch();
  const API = "http://localhost:6002/data.json";
  const [start, setStart] = useState(false);

  //Fetcha API
  async function fetchFunction() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      //dispatch action state
      dispatch(fetchAction(data));
    } catch (err) {
      throw err;
    }
  }

  //Starta appen, kalla på fetchfunktionen
  function startApp() {
    fetchFunction();
    setStart(true);
  }
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<FilterInput />}></Route>
          <Route path="/add" element={<AddExercise />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/random" element={<RandomWod />}></Route>
        </Routes>
        {!start ? (
          <button onClick={startApp} id="startBtn">
            START
          </button>
        ) : (
          <>
            <section className="nav" id="home">
              <Link to="/">Home</Link>

              <Link to="/history">History</Link>
            </section>
            <section className="nav" id="mainNav">
              <Link to="/search">Search</Link>
              <Link to="/add">Add exercise</Link>
              <Link to="/random">RandomWod</Link>
            </section>
          </>
        )}
      </BrowserRouter>
    </main>
  );
}

export default App;
