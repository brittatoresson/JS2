import { useSelector, useDispatch } from "react-redux";
import { saveWorkout } from "../Actions/exerciseAction";

function SaveWorkout() {
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.saveExReducer);
  console.log(updateState);

  const currentDate = Date().toLocaleString();

  function saveWorkoutFunction() {
    //PUSHA IN NY SAVE I EN ARRAY? TYP SOM I setNewEx OCH setSaveEX
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
