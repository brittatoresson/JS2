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
  return {
    type: "SAVE_WORKOUT",
    payload: saveWorkout,
  };
};
export const saveRandom = (saveRandom) => {
  return {
    type: "SAVE_RANDOM",
    payload: saveRandom,
  };
};
export const saveEX = (saveEx, min, set, reps, count, date) => {
  return {
    type: "SAVE_EX",
    payload: {
      ex: saveEx,
      min: min,
      set: set,
      reps: reps,
      count: count,
      date: date,
    },
  };
};
