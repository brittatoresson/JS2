import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counter } from "../Actions/exerciseAction";
import { store } from "../index";

function AddExercise() {
  const [newEx, setNewEx] = useState([]);
  const [weight, setWeight] = useState([]);
  const [set, setSet] = useState([]);
  const [reps, setReps] = useState([]);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const updateState = useSelector((state) => state);
  console.log(updateState);

  let id = updateState.length;

  function handleChange(ex, weight, set, reps) {
    if (ex) {
      setNewEx(ex);
    }
    if (weight) {
      setWeight(weight);
    }
    if (set) {
      setSet(set);
    }
    if (reps) {
      setReps(reps);
    }
  }

  const submit = () => {
    store.dispatch({
      type: "ADD_EX",
      payload: { name: newEx, id: id++, weight: weight, set: set, reps: reps },
    });

    setCount(count + 1);
    dispatch(counter(count));
  };

  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  return (
    <section>
      <section id="searchExercise">
        <h1>Search ex</h1>

        <input
          type="text"
          placeholder="exercise"
          onChange={(e) => handleChange(e.target.value, null, null, null)}
        ></input>
        <input
          type="text"
          placeholder="weight"
          onChange={(e) => handleChange(null, e.target.value, null, null)}
        ></input>
        <label htmlFor="set">Set</label>
        <input
          type="number"
          name="set"
          onChange={(e) => handleChange(null, null, e.target.value, null)}
        />
        <label htmlFor="reps">Reps</label>
        <input
          type="number"
          name="reps"
          onChange={(e) => handleChange(null, null, null, e.target.value)}
        />

        <button
          onClick={submit}
          // onChange={(e) => dispatch(count(e.target.value))}
        >
          ADD
        </button>
      </section>

      <section id="updateExList">
        {updateState.map((item, i) => (
          <article key={i}>
            <ul>
              <li>{item.name}</li>
              <li>{item.weight}</li>
              <li>
                {item.set} set x {item.reps} reps
              </li>
            </ul>
          </article>
        ))}
        <h1>Antal övningar: {count}</h1>
      </section>
    </section>
  );
}

export default AddExercise;
