export const addEx = (ex) => {
  return {
    type: "ADD_EX",
    payload: ex,
    id: 0,
  };
};
export const removeEx = () => {
  return {
    type: "REMOVE_EX",
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
