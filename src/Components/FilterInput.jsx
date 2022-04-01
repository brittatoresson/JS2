import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchExercise from "./SearchExercises";

function FilterInput() {
  const [search, setSearch] = useState("");
  const [filterResult, setFilterResult] = useState([]);
  const updateState = useSelector((state) => state);

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
    //Töm filterResults vid varje sökning
    setFilterResult([]);
  }, [search]);

  return (
    <section id="filterbody">
      <section id="inputField">
        <input
          type="text"
          placeholder="exercise"
          onChange={(e) => saveInput(e.target.value)}
        ></input>
        <button onClick={() => filterResults()}>Sök</button>
      </section>
      <SearchExercise searchData={filterResult} />
    </section>
  );
}

export default FilterInput;
