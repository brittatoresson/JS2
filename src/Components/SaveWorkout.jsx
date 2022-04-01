import { useSelector, useDispatch } from "react-redux";
import { saveWorkout, saveDate } from "../Actions/exerciseAction";
import { render } from "react-dom";
import { store } from "../index";

function SaveWorkout() {
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state);
  console.log(updateState);
  const currentDate = Date().toLocaleString();

  function saveWorkoutFunction() {
    dispatch(saveWorkout(updateState, currentDate));
    // dispatch(saveDate(currentDate));
    console.log(updateState);
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
