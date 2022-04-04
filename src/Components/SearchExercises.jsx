import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
  }

  function time(e) {
    setMin(e);
  }
  dispatch(saveEX(saveEx, min, set, reps));

  // useEffect(() => {}, []);

  return (
    <section id="searchExercise">
      {props.searchData.map((item, i) => (
        <li
          key={i}
          onClick={() => saveExercise({ name: item.name, id: item.id })}
        >
          + {item.name}
        </li>
      ))}
      <section id="workout">
        <h1>Your Workout</h1>
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
      </section>
      {count > 0 ? (
        <span>
          <label htmlFor="mins"> Add timecap: </label>
          <input
            type="text"
            name="min"
            onChange={(e) => time(e.target.value)}
          />{" "}
        </span>
      ) : null}
      <p id="count">Antal övningar: {count}</p>
      {count > 0 && min > 0 ? <Timer time={min} /> : null}

      {/* <p>ange min</p> */}
    </section>
  );
}

export default SearchExercise;
