let initState = [
  {
    id: "1",
    name: "deadlift",
    weight: 0,
    set: 0,
    reps: 0,
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
      return state.map((item) => {
        if (item.id === action.payload.id) {
          console.log(item.id);
          console.log(state);
          // delete item.id;
          // return [...state];
        }
      });
      break;
    // case "REMOVE_EX":
    //   return state.filter((item) => item.id !== action.payload.id);
    // return action.payload;
    //   break;

    // case "SAVE_WORKOUT":
    //   return action.payload;
    //   break;
    // case "SAVE_EX":
    //   return action.payload;
    //   break;
    default:
      return state;
  }
};

export default exerciseReducer;
