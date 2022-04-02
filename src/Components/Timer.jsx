import { useEffect, useState } from "react";
import SaveWorkout from "./SaveWorkout";

function Timer(timedata) {
  let finishMessage = "Done!";
  let time = timedata.time * 60;
  let min = Math.floor(time / 60);
  let sec = time % 60;

  const [minutes, setMinutes] = useState(min);
  const [seconds, setSeconds] = useState(sec);

  useEffect(() => {
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
  }, [seconds]);
  return (
    <section id="timer">
      <div>{minutes + ":" + seconds}</div>
      {seconds === 0 && minutes === 0
        ? ((<p>{finishMessage}</p>), (<SaveWorkout />))
        : null}
    </section>
  );
}

export default Timer;
