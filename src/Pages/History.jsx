import { useSelector, useDispatch } from "react-redux";
import testReducer from "../Reducers/saveExReducer";

function History() {
  // const updateState = useSelector((state) => state.saveExReducer);
  const updateState = useSelector((state) => state.saveExReducer);
  let date;
  // let date = updateState.date.slice(0, updateState.date.length - 38);

  if (updateState.date) {
    date = updateState.date.slice(0, updateState.date.length - 38);
  }

  return (
    <section>
      <h1>History</h1>
      {updateState.date ? (
        updateState.workout.map((item, i) => (
          <ul key={i}>
            <li>{item.name}</li>
          </ul>
        ))
      ) : (
        <p>No history</p>
      )}
      <p>{date}</p>
    </section>
  );
}

export default History;
