import { useEffect, useState } from "react";
import SaveWorkout from "./SaveWorkout";

function Timer(props) {
  let time = props.time * 60;
  let min = Math.floor(time / 60);
  let sec = time % 60;

  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);
  const [clicked, setClicked] = useState(false);

  if (clicked === true) {
    let countDown = setTimeout(() => {
      if (seconds > 0) {
        setSeconds((prev) => seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearTimeout(countDown);
        } else {
          setMinutes((prev) => minutes - 1);
          setSeconds((prev) => 59);
        }
      }
    }, 1000);
  }

  return (
    <section id="timer">
      <div>{minutes + ":" + seconds}</div>
      {seconds === 0 && minutes === 0 ? (
        ((<p>Done!</p>), (<SaveWorkout />))
      ) : (
        <button onClick={() => setClicked(!clicked)}>
          {!clicked ? "Go!" : "Stop"}
        </button>
      )}

      {/* {clicked ? <Timer time={min.time} /> : null} */}
    </section>
  );
}

export default Timer;
