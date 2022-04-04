export const fetchAction = () => {
  return {
    type: "FETCH",
  };
};
export const addEx = (ex) => {
  return {
    type: "ADD_EX",
    payload: ex,
    id: 0,
  };
};
export const removeEx = (id) => {
  return {
    type: "REMOVE_EX",
    payload: id,
  };
};
export const saveWorkout = (saveWorkout, date) => {
  console.log(date);
  return {
    type: "SAVE_WORKOUT",
    payload: { workout: saveWorkout, date: date },
  };
};
export const saveEX = (saveEx, min, set, reps) => {
  return {
    type: "SAVE_EX",
    payload: { ex: saveEx, min: min, set: set, reps: reps },
  };
};
