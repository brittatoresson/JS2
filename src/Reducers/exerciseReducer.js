let initState = [
  {
    id: "1",
    name: "deadlift",
    // weight: 0,
    // set: 0,
    // reps: 0,
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
    case "REMOVE_EX":
      return action.payload;

    default:
      return state;
  }
};

export default exerciseReducer;
