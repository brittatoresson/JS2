import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";

function AddExercise() {
  const [newEx, setNewEx] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state);
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
    console.log(equipment);
  };

  let itemId;
  const [filterResult, setFilterResult] = useState([]);
  function removeEx(id) {
    itemId = id.id;
    // store.dispatch({
    //   type: "REMOVE_EX",
    //   payload: itemId,
    // });

    // updateState.forEach((item) => {
    //   console.log(item.id);
    //   if (item.id == id.id) {
    //     setFilterResult(item);
    //   }
    // });
  }

  // store.subscribe(() => {
  //   console.log(store.getState());
  // });

  return (
    <section id="addExercise">
      <section id="addExerciseInput">
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
            <li onClick={() => removeEx({ id: item.id })}>
              {item.name}{" "}
              {item.equipment ? "Equipment: " + item.equipment : null}
            </li>
          </article>
        ))}
      </section>
    </section>
  );
}

export default AddExercise;
