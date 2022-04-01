export const addEx = (ex) => {
  return {
    type: "ADD_EX",
    payload: ex,
    id: 0,
  };
};
export const addSetReps = () => {
  return {
    type: "ADD_SET_REPS",
  };
};
export const removeEx = (ex) => {
  return {
    type: "REMOVE_EX",
    payload: ex,
  };
};
export const counter = (nr) => {
  return {
    type: "COUNTER",
    payload: nr,
  };
};
export const fetchAction = () => {
  return {
    type: "FETCH",
  };
};
export const saveWorkout = (saveWorkout, date) => {
  return {
    type: "SAVE_WORKOUT",
    payload: { workout: saveWorkout, date: date },
  };
};
export const saveEX = (saveEx) => {
  return {
    type: "SAVE_EX",
    payload: saveEx,
  };
};
export const saveDate = (date) => {
  return {
    type: "SAVE_DATE",
    payload: date,
  };
};
