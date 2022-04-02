import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GoBtn from "./GoBtn";
import { saveEX } from "../Actions/exerciseAction";
import Timer from "./Timer";

function SearchExercise(props) {
  const [saveEx, setSaveEx] = useState([]);
  const [set, setSet] = useState([]);
  const [reps, setReps] = useState([]);
  const [min, setMin] = useState(0);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  //funktion som sparar vald exercise till setSaveEx

  function saveExercise(data) {
    setSaveEx((prev) => [...prev, { name: data.name, id: data.id }]);
    //counter för antal övningar
    setCount(count + 1);
    // dispatch saveEx
    dispatch(saveEX(saveEx));
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

      <h1>Workout</h1>
      {saveEx.map((ex, i) => (
        <article key={i} id="savedEx">
          <h3 key={ex.id}>{ex.name}</h3>

          <label htmlFor="set">Set: </label>
          <input
            type="text"
            name="set"
            onChange={(e) => setSet(e.target.value)}
          />
          <label htmlFor="reps"> Reps: </label>
          <input
            type="text"
            name="reps"
            onChange={(e) => setReps(e.target.value)}
          />
        </article>
      ))}
      <span>
        <label htmlFor="mins"> Time: </label>
        <input
          type="text"
          name="min"
          placeholder="30 min"
          onChange={(e) => setMin(e.target.value)}
        />
      </span>
      <p>Antal övningar: {count}</p>
      {count > 0 && min > 0 ? <Timer time={min} /> : <p>ange min</p>}
      {/* <GoBtn time={min} /> */}
    </section>
  );
}

export default SearchExercise;
