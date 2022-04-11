import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Timer from "../Components/Timer";
import { saveRandom } from "../Actions/exerciseAction";

let numberOfExercise;
let randomEx = [];
let allExerciseArray = [];
let wod = [];
let time;

function RandomWod() {
  const [input, setinput] = useState();
  const updateState = useSelector((state) => state.exerciseReducer);
  const dispatch = useDispatch();

  //Mappa igenom state och pusha in varje övning i en tom array
  updateState.map((item) => {
    allExerciseArray.push(item.name);
  });

  //loopa igenom all data i den nya arrayen utifrån input-värdet som ger antal övningar
  //pusha in x-antal övningar och x-antal minuter i wod-arrayen
  for (let i = 0; i < input; i++) {
    randomEx =
      allExerciseArray[Math.floor(Math.random() * allExerciseArray.length)];
    numberOfExercise = Math.floor(Math.random() * 30);
    time = Math.floor(Math.random() * 40);
    wod.push(` ${numberOfExercise} st ${randomEx}`);
  }

  if (randomEx.length > 1) {
    dispatch(saveRandom(wod));
  }

  useEffect(() => {
    //töm array vid varje nytt input
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
      {input > 0 ? <Timer time={time} /> : null}
    </section>
  );
}

export default RandomWod;
