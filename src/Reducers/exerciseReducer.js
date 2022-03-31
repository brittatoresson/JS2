import { useState, useEffect } from "react";

let initState = [
  {
    id: "1",
    name: "deadlift",
    weight: 0,
    set: 0,
    reps: 0,
    alternative: "goblet squat",
  },
];

const exerciseReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
      break;
    case "ADD_EX":
      return [...state, action.payload];
      break;
    case "COUNTER":
      return [...state, { reps: action.payload }];
      break;

    case "REMOVE_EX":
      return {
        ...state,
        ex: state.ex - 1,
      };
      break;

    default:
      return state;
  }
};

export default exerciseReducer;
