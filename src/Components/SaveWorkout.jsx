import { useSelector, useDispatch } from "react-redux";
import { saveWorkout } from "../Actions/exerciseAction";
import { useState } from "react";
import { Link } from "react-router-dom";

function SaveWorkout() {
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const updateState = useSelector((state) => state.saveExReducer);
  const currentDate = useState(Date().toLocaleString());

  //Funktion som sparar hela träningspasset och uppdaterar state med detta, skickar även in dagens datum
  function saveWorkoutFunction() {
    setClick(!click);
    dispatch(saveWorkout(updateState, currentDate));
  }

  return (
    <section id="saveWorkout">
      {!click ? (
        <span>
          <h1>Save workout?</h1>
          <button onClick={saveWorkoutFunction}>Yes</button>
          <Link to="/">
            <button>No</button>
          </Link>
        </span>
      ) : (
        <h1>Saved!</h1>
      )}
    </section>
  );
}

export default SaveWorkout;
