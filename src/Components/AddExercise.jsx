import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEx, removeEx } from "../Actions/exerciseAction";

function AddExercise() {
  const [newEx, setNewEx] = useState([]);
  const [equipment, setEquipment] = useState();
  const [remove, setRemove] = useState([]);
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.exerciseReducer);
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
    if (remove.length > 1) {
      setRemove((prev) => [
        ...prev,
        { name: newEx, id: id++, equipment: equipment },
      ]);
      //Om ett element är borttaget ur listan dispatchas remove
      dispatch(addEx(remove));
    } else {
      //Om inget element är borttaget ur listan dispatchas newEx
      dispatch(addEx({ name: newEx, id: id++, equipment: equipment }));
    }
  };

  //Uppdaterar listan med övningar när en övning tas bort
  function removeExercise(id) {
    if (id) {
      //Reset remove vid varje klick
      setRemove([]);
      updateState.forEach((element) => {
        if (element.id !== id.id) {
          setRemove((prev) => [...prev, element]);
        }
      });
    }
  }

  // dispatch om listan med remove är större än 1
  if (remove.length > 1) {
    dispatch(removeEx(remove));
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
            <li onClick={() => removeExercise({ id: item.id })}>
              {item.name}
              {item.equipment ? "Equipment: " + item.equipment : null}
            </li>
          </article>
        ))}
      </section>
    </section>
  );
}

export default AddExercise;
