let initState = [
  {
    id: "1",
    name: "",
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
