import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchExercise from "./SearchExercises";

function FilterInput() {
  const [search, setSearch] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  const updateState = useSelector((state) => state.exerciseReducer);

  //Spara datan från input
  function saveInput(input) {
    setSearch(input.toLowerCase());
  }
  //Funktion som filtrerar input mot API
  function filterResults() {
    updateState.forEach((name) => {
      if (name.name.toLowerCase().includes(search)) {
        setFilterResult((prev) => [...prev, { name: name.name, id: name.id }]);
      }
    });
  }
  // kalla på filterResults() vid enter
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
      <SearchExercise searchData={filterResult} />
    </section>
  );
}

export default FilterInput;
