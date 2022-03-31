import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchExercise from "./Components/SearchExercises";
import { store } from "./index";

function Fetch() {
  const updateState = useSelector((state) => state);
  console.log(updateState);

  const API = "http://localhost:6001/data.json";
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  async function fetchFunction() {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setState(data);
    } catch (err) {
      throw err;
    }
  }
  store.dispatch({
    type: "FETCH",
    payload: state,
  });
  console.log(state);

  function handleChange(input) {
    setSearch(input);
  }

  function checkResults() {
    updateState.forEach((name) => {
      if (name.name.includes(search)) {
        setSearchResult((prev) => [...prev, { name: name.name, id: name.id }]);
        console.log(name);
      }
    });

    console.log(searchResult);
  }

  useEffect(() => {
    fetchFunction();
    // checkResults();
  }, [search]);

  return (
    <section>
      <input
        type="text"
        placeholder="exercise"
        onChange={(e) => handleChange(e.target.value)}
      ></input>
      <button onClick={() => checkResults()}>Sök</button>
      <SearchExercise searchData={searchResult} />
    </section>
  );
}

export default Fetch;

//   useEffect(() => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((data) => setState(data));
//     map();
//   }, []);
