import { useSelector } from "react-redux";

function History() {
  const updateState = useSelector((state) => state.saveWorkoutReducer);
  const randomWod = useSelector((state) => state.saveRandomWodReducer);
  let date;
  let savedDate;
  let savedName = [];
  console.log(updateState);
  console.log(randomWod);

  if (updateState) {
    updateState.forEach((element) => {
      date = element.date;
      element.ex.forEach((element) => {
        savedName.push(element.name);
      });
    });
  }
  console.log(date);

  return (
    <section id="history" className="scroller">
      <h1>History</h1>
      <h3>{savedDate}</h3>

      {!date && !randomWod ? <p>No history</p> : null}
      {date
        ? updateState.map((item, i) => {
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

      <h3> Saved Random Wod: </h3>
      {randomWod
        ? randomWod.map((item, i) => (
            <>
              <p key={i}> * {item}</p>
            </>
          ))
        : null}
    </section>
  );
}

export default History;
