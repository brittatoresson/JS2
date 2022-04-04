import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../index";
import { addEx, removeEx } from "../Actions/exerciseAction";

function AddExercise() {
  const [newEx, setNewEx] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.exerciseReducer);
  const [removeState, setRemoveState] = useState([]);
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
    if (removeState.length > 1) {
      //Om ett element är borttaget ur listan dispatchas removeState
      setRemoveState((prev) => [
        ...prev,
        { name: newEx, id: id++, equipment: equipment },
      ]);
      dispatch(addEx(removeState));
      //Om inget element är borttaget ur listan dispatchas newEx
    } else {
      dispatch(addEx({ name: newEx, id: id++, equipment: equipment }));
    }
  };

  function removeEx(id) {
    //Reset removeState vid varje klick
    setRemoveState([]);
    updateState.forEach((element) => {
      if (!element.id.includes(id.id)) {
        setRemoveState((prev) => [...prev, element]);
      }
    });
    // updateState.forEach((element) => {
    //   if (element.id == !id.id) {
    //     setRemoveState((prev) => [...prev, element]);
    //   }
    // });
  }

  if (removeState.length > 1) {
    // dispatch(removeEx(removeState));
    store.dispatch({
      type: "REMOVE_EX",
      payload: removeState,
    });
  }

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
