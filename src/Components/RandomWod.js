import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import { saveWorkout } from "../Actions/exerciseAction";
import { saveRandom } from "../Actions/exerciseAction";

let numberOfExercise;
let randomAll = [];
let allExerciseArray = [];
let wod = [];
let time;

function RandomWod() {
  const [input, setinput] = useState();
  const updateState = useSelector((state) => state.exerciseReducer);
  const dispatch = useDispatch();

  //mappa igenom state och pusha in varje övning i en ny arrat
  updateState.map((item) => {
    allExerciseArray.push(item.name);
  });

  //loopa igenom all data i den nya arrayen utifrån input-värdet
  //pusha in x-antal övningar i wod-arrayen
  for (let i = 0; i < input; i++) {
    randomAll =
      allExerciseArray[Math.floor(Math.random() * allExerciseArray.length)];
    numberOfExercise = Math.floor(Math.random() * 30);
    time = Math.floor(Math.random() * 40);
    wod.push(` ${numberOfExercise} st ${randomAll}`);
  }

  if (randomAll.length > 1) {
    dispatch(saveRandom(wod));
  }

  useEffect(() => {
    wod = [];
  }, [input]);

  return (
    <section id="randomWod">
      <h1>Random Wod</h1>
      <input
        type="number"
        name="number"
        placeholder="Number of exercise"
        onChange={(e) => setinput(e.target.value)}
      ></input>
      {input > 0 ? (
        <section id="randomWodList">
          {wod.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </section>
      ) : null}
      {input > 0 ? <Timer time={0.1} /> : null}
    </section>
  );
}

export default RandomWod;
