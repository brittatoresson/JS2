import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchExercise from "./Components/SearchExercises";
import { store } from "./index";

function Fetch() {
  const API = "http://localhost:6001/data.json";
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [filterResult, setFilterResult] = useState([]);

  const updateState = useSelector((state) => state);

  // async function fetchFunction() {
  //   try {
  //     const response = await fetch(API);
  //     const data = await response.json();
  //     setState(data);
  //   } catch (err) {
  //     throw err;
  //   }
  // }
  // store.dispatch({
  //   type: "FETCH",
  //   payload: state,
  // });

  //Save data from input
  function saveInput(input) {
    setSearch(input);
  }

  //Funktion som filtrerar sökresultatet mot API
  function filterResults() {
    updateState.forEach((name) => {
      if (name.name.includes(search)) {
        setFilterResult((prev) => [...prev, { name: name.name, id: name.id }]);
      }
    });
  }

  useEffect(() => {
    //kalla på fetchfunktionen
    // fetchFunction();
    //Töm filterResults vid varje sökning
    setFilterResult([]);
  }, [search]);

  return (
    <section>
      <input
        type="text"
        placeholder="exercise"
        onChange={(e) => saveInput(e.target.value)}
      ></input>
      <button onClick={() => filterResults()}>Sök</button>
      <SearchExercise searchData={filterResult} />
    </section>
  );
}

export default Fetch;
