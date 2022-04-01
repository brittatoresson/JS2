import { useSelector, useDispatch } from "react-redux";
import { saveWorkout } from "../Actions/exerciseAction";

function SaveWorkout() {
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state);
  console.log(updateState);
  const currentDate = Date().toLocaleString();

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
