import { useSelector, useDispatch } from "react-redux";
import testReducer from "../Reducers/saveExReducer";

function History() {
  // const updateState = useSelector((state) => state.saveExReducer);
  const updateState = useSelector((state) => state.saveExReducer);
  let date;

  // let date = updateState.date.slice(0, updateState.date.length - 38);
  console.log(updateState);
  if (updateState.date) {
    date = updateState.date[0].slice(0, updateState.date.length - 48);
    console.log(date);
  }

  return (
    <section id="history">
      <h1>History</h1>
      <h3>{date}</h3>
      {updateState.date ? (
        updateState.workout.ex.map((item, i) => <h3 key={i}>{item.name}</h3>)
      ) : (
        <p>No history</p>
      )}

      {updateState.workout ? (
        <ul id="historyStats">
          <li>Set: {updateState.workout.set}</li>
          <li>Reps: {updateState.workout.reps}</li>
          <li>Total time: {updateState.workout.min} min</li>
        </ul>
      ) : null}
    </section>
  );
}

export default History;
