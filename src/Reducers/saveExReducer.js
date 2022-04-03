let saveEX = [
  {
    id: "2",
    name: "push press",
    weight: 0,
    set: 0,
    reps: 0,
  },
];

const saveExReducer = (state = saveEX, action) => {
  switch (action.type) {
    case "SAVE_EX":
      return action.payload;
      break;
    case "SAVE_WORKOUT":
      return action.payload;
      // return [...state, action.payload];
      break;
    default:
      return state;
  }
};

export default saveExReducer;
