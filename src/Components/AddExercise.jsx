import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";
import { addEx, removeEx } from "../Actions/exerciseAction";

function AddExercise() {
  const [newEx, setNewEx] = useState([]);
  const [equipment, setEquipment] = useState();
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.exerciseReducer);
  const [removeState, setRemoveState] = useState([]);
  let id = updateState.length;

  //Funktion som hämtar data från inputfält
  function handleChange(ex, equipment) {
    if (ex) {
      setNewEx(ex);
    }
    if (equipment) {
      setEquipment(equipment);
    }
  }
  //Uppdaterar listan med övningar med nya items, id och equipment
  const submit = () => {
    if (removeState.length > 1) {
      setRemoveState((prev) => [
        ...prev,
        { name: newEx, id: id++, equipment: equipment },
      ]);
      //Om ett element är borttaget ur listan dispatchas removeState
      dispatch(addEx(removeState));
    } else {
      //Om inget element är borttaget ur listan dispatchas newEx
      dispatch(addEx({ name: newEx, id: id++, equipment: equipment }));
    }
  };
  //Uppdaterar listan med övningar när en övning tas bort
  function removeEx(id) {
    if (id) {
      //Reset removeState vid varje klick
      setRemoveState([]);
      updateState.forEach((element) => {
        if (!element.id.toString().includes(id.id)) {
          setRemoveState((prev) => [...prev, element]);
        }
      });
      // updateState.forEach((element) => {
      //   if (element.id == !id.id) {
      //     setRemoveState((prev) => [...prev, element]);
      //   }
      // });
    }
  }
  // dispatch om listan med removeState är större än 1
  if (removeState.length > 1) {
    // dispatch(removeEx(removeState));
    store.dispatch({
      type: "REMOVE_EX",
      payload: removeState,
    });
  }

  return (
    <section id="addExercise  ">
      <section id="addExerciseInput">
        <h1>Add exercise</h1>

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

        <button onClick={submit}>ADD</button>
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
