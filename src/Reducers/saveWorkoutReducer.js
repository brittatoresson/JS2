let saveWorkout = [];

const saveWorkoutReducer = (state = saveWorkout, action) => {
  switch (action.type) {
    case "SAVE_WORKOUT":
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};

export default saveWorkoutReducer;
