import { useSelector, useDispatch } from "react-redux";
import { saveWorkout } from "../Actions/exerciseAction";
import { useState } from "react";
import { Link } from "react-router-dom";

function SaveWorkout() {
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.saveExReducer);
  console.log(updateState);

  const currentDate = useState(Date().toLocaleString());
  // const [newWorkout, setNewWorkout] = useState(updateState);
  console.log(currentDate);

  function saveWorkoutFunction() {
    dispatch(saveWorkout(updateState, currentDate));
  }

  return (
    <section id="saveWorkout">
      <h1>Save workout?</h1>
      <button onClick={saveWorkoutFunction}>Yes</button>
      <Link to="/">
        {" "}
        <button>No</button>
      </Link>
    </section>
  );
}

export default SaveWorkout;
