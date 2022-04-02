import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";
import Fetch from "../fetch";

function AddExercise() {
  const [newEx, setNewEx] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const updateState = useSelector((state) => state);
  console.log(updateState);

  let id = updateState.length;

  function handleChange(ex, equipment) {
    if (ex) {
      setNewEx(ex);
    }
    if (equipment) {
      setEquipment(equipment);
    }
  }

  const submit = () => {
    store.dispatch({
      type: "ADD_EX",
      payload: { name: newEx, id: id++, equipment: equipment },
    });
  };

  // const removeEx = (id) => {
  //   console.log(id.id);

  //   let filterState = updateState.filter((item) => item.id == id.id);
  //   console.log(typeof filterState);
  //   console.log(filterState);
  //   console.log(updateState);
  //   store.dispatch({
  //     type: "REMOVE_EX",
  //     payload: filterState,
  //   });
  // };
  const [filterResult, setFilterResult] = useState([]);
  function removeEx(id) {
    console.log(id.id);
    updateState.forEach((item) => {
      console.log(item.id);
      if (item.id == id.id) {
        setFilterResult((prev) => [...prev, { item }]);
      }
    });
  }

  // useEffect(() => {
  //   //kalla på fetchfunktionen
  //   // fetchFunction();
  //   //Töm filterResults vid varje sökning
  //   setFilterResult([]);
  // }, [search]);

  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  return (
    <section>
      <section id="addExercise">
        <h1>Add ex</h1>

        <input
          type="text"
          placeholder="exercise"
          onChange={(e) => handleChange(e.target.value, null, null, null)}
        ></input>
        <input
          type="text"
          placeholder="equipment"
          onChange={(e) => handleChange(null, e.target.value, null, null)}
        ></input>

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
              <li onClick={() => removeEx({ id: item.id })}>{item.name}</li>
              <li>{item.equipment}</li>
            </ul>
          </article>
        ))}
      </section>
    </section>
  );
}

export default AddExercise;
