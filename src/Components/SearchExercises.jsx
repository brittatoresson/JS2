import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../index";
import GoBtn from "./GoBtn";
import { counter } from "../Actions/exerciseAction";
import { saveEX } from "../Actions/exerciseAction";

function SearchExercise(props) {
  const [saveEx, setSaveEx] = useState([]);
  const [set, setSet] = useState([]);
  const [reps, setReps] = useState([]);
  const [min, setMin] = useState([30]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  //funktion som sparar vald exercise till setSaveEx

  function saveExercise(data) {
    setSaveEx((prev) => [...prev, { name: data.name, id: data.id }]);
    //counter för antal vöningar
    setCount(count + 1);
    // dispatch saveEx
    dispatch(saveEX(saveEx));
    console.log(saveEx);
  }

  function handleChange(set, reps, min) {
    if (set) {
      setSet(set);
    }
    if (reps) {
      setReps(reps);
    }
    if (min) {
      setMin(min);
    }
  }

  return (
    <section id="searchExercise">
      <section>
        {props.searchData.map((item, i) => (
          <li
            key={i}
            onClick={() => saveExercise({ name: item.name, id: item.id })}
          >
            {item.name}
          </li>
        ))}
      </section>

      <h1>Picked exercises</h1>
      {saveEx.map((ex, i) => (
        <article key={i} id="savedEx">
          <h4 key={ex.id}>{ex.name}</h4>

          <label htmlFor="set">Set: </label>
          <input
            type="number"
            name="set"
            onChange={(e) => handleChange(e.target.value, null, null)}
          />
          <label htmlFor="reps"> Reps: </label>
          <input
            type="number"
            name="reps"
            onChange={(e) => handleChange(null, e.target.value, null)}
          />
        </article>
      ))}
      <span>
        <label htmlFor="mins"> Time: </label>
        <input
          type="min"
          name="min"
          placeholder="30 min"
          onChange={(e) => handleChange(null, null, e.target.value)}
        />
      </span>
      <h1>Antal övningar: {count}</h1>

      <GoBtn time={min} />
    </section>
  );
}

export default SearchExercise;
