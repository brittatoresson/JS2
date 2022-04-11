import { useSelector } from "react-redux";

function History() {
  const savedWorkout = useSelector((state) => state.saveWorkoutReducer);
  const randomWod = useSelector((state) => state.saveRandomWodReducer);
  let date;

  //ta ut date från savedWorkout
  if (savedWorkout) {
    savedWorkout.forEach((element) => {
      date = element.date;
    });
  }

  return (
    <section id="history" className="scroller">
      <h1>History</h1>
      {!date && randomWod.length === 0 ? <p>No history</p> : null}
      {date
        ? savedWorkout.map((item, i) => {
            return (
              <section key={i} id="historySection">
                <h3>{item.date[0].slice(0, date.length - 48)}</h3>
                {item.ex.map((item, i) => {
                  return <h4 key={i}>{item.name}</h4>;
                })}
                <ul id="historyStats" key={i}>
                  <li>
                    {item.set} set x {item.reps} reps
                  </li>
                  <li>Total time: {item.min} min</li>
                  <li>Nr exercises {item.count} st</li>
                </ul>
              </section>
            );
          })
        : null}

      {randomWod.length > 0 ? <h3> Saved Random Wod: </h3> : null}
      {randomWod ? randomWod.map((item, i) => <p key={i}> * {item}</p>) : null}
    </section>
  );
}

export default History;
