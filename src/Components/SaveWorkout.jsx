import { useSelector, useDispatch } from "react-redux";
import { saveWorkout } from "../Actions/exerciseAction";
import { useState } from "react";

function SaveWorkout() {
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.saveExReducer);
  console.log(updateState);

  const currentDate = useState(Date().toLocaleString());
  // const [newWorkout, setNewWorkout] = useState(updateState);

  function saveWorkoutFunction() {
    dispatch(saveWorkout(updateState, currentDate));
  }

  return (
    <section id="saveWorkout">
      <h1>Save workout?</h1>
      <button onClick={saveWorkoutFunction}>Yes</button>
      <button>No</button>
    </section>
  );
}

export default SaveWorkout;
