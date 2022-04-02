import { useSelector, useDispatch } from "react-redux";

function History() {
  const updateState = useSelector((state) => state);
  let date = updateState.date.slice(0, updateState.date.length - 38);

  return (
    <section>
      <h1>History</h1>
      {updateState.workout.map((item, i) => (
        <ul key={i}>
          <li>{item.name}</li>
        </ul>
      ))}
      <p>{date}</p>
    </section>
  );
}

export default History;
