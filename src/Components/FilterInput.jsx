import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchExercise from "./SearchExercises";
import exerciseReducer from "../Reducers/exerciseReducer";

function FilterInput() {
  const [search, setSearch] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  const updateState = useSelector((state) => state.exerciseReducer);
  const dispatch = useDispatch();
  const [hit, setHit] = useState(true);
  //Save data from input
  function saveInput(input) {
    setSearch(input.toLowerCase());
  }
  //Funktion som filtrerar sökresultatet mot API
  function filterResults() {
    updateState.forEach((name) => {
      if (name.name.toLowerCase().includes(search)) {
        setFilterResult((prev) => [...prev, { name: name.name, id: name.id }]);
        setHit(true);
      } else {
        setHit(false);
      }
    });
  }
  function onEnter(e) {
    if (e.key === "Enter") {
      filterResults();
    }
  }
  useEffect(() => {
    //Töm filterResults vid varje sökning
    setFilterResult([]);
  }, [search]);

  return (
    <section id="filterbody">
      <h1>Plan your workout</h1>
      <section id="inputField">
        <input
          type="text"
          placeholder="search exercise"
          onChange={(e) => saveInput(e.target.value)}
          onKeyDown={(e) => onEnter(e)}
        ></input>
        <button onClick={() => filterResults()}>Search</button>
      </section>
      {/* {hit === false ? "No hits" : null} */}
      <SearchExercise searchData={filterResult} />
    </section>
  );
}

export default FilterInput;
