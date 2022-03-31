import { useState } from "react";

function SearchExercise(props) {
  const [saveEx, setSaveEx] = useState([]);
  console.log(props.searchData);

  //funktion som sparar vald exercise till setSaveEx
  function saveExercise(data) {
    let name = data.name;
    let id = data.id;
    setSaveEx((prev) => [...prev, { name: name, id: id }]);
  }

  return (
    <section id="searchExercise">
      <section>
        {props.searchData.map((item, i) => (
          <p
            key={i}
            onClick={() => saveExercise({ name: item.name, id: item.id })}
          >
            {item.name}
          </p>
        ))}
      </section>
      <section>
        <h1>Picked exercises</h1>
        {saveEx.map((ex) => (
          <h2 key={ex.id}>{ex.name}</h2>
        ))}
      </section>
    </section>
  );
}

export default SearchExercise;
