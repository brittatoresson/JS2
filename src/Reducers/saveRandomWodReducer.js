let saveWorkout = [];

const saveRandomWodReducer = (state = saveWorkout, action) => {
  switch (action.type) {
    case "SAVE_RANDOM":
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};

export default saveRandomWodReducer;
