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
  }

  return (
    <section id="history">
      <h1>History</h1>
      <p>{date}</p>
      {updateState.date ? (
        updateState.workout.ex.map((item, i) => (
          <ul key={i}>
            <li>{item.name}</li>
          </ul>
        ))
      ) : (
        <p>No history</p>
      )}

      {updateState.workout ? (
        <ul>
          <li>Set: {updateState.workout.set}</li>
          <li>Reps: {updateState.workout.reps}</li>
          <li>Min: {updateState.workout.min}</li>
        </ul>
      ) : null}
    </section>
  );
}

export default History;
