import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Timer from "./Timer";

let numberOfExercise;
let randomAll = [];
let allExerciseArray = [];
let wod = [];

function RandomWod() {
  const [input, setInput] = useState();
  const updateState = useSelector((state) => state.exerciseReducer);

  //mappa igenom state och pusha in varje övning i en ny arrat
  updateState.map((item) => {
    allExerciseArray.push(item.name);
  });
  //ta in input som är antal övningar
  function inputNr(nr) {
    setInput(nr);
    wod = [];
  }
  //loopa igenom all data i den nya arrayen utifrån input-värdet
  //pusha in x-antal övningar i wod-arrayen
  for (let i = 0; i < input; i++) {
    randomAll =
      allExerciseArray[Math.floor(Math.random() * allExerciseArray.length)];
    numberOfExercise = Math.floor(Math.random() * 30) + 1;
    wod.push(` ${numberOfExercise} st ${randomAll}`);
  }

  return (
    <section id="randomWod">
      <h1>RandomWod</h1>
      <input type="number" onChange={(e) => inputNr(e.target.value)}></input>
      {/* <input type="number" onChange={(e) => inputNr(e.target.value)}></input> */}
      {wod.map((item, i) => (
        <p key={i}>{item}</p>
      ))}
      {input ? <Timer time={input} /> : null}
    </section>
  );
}

export default RandomWod;
