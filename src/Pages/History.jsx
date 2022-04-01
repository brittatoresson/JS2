import { useSelector, useDispatch } from "react-redux";

function History() {
  let date;
  const updateState = useSelector((state) => state);

  //om updateStore innehåller data-properaty
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
