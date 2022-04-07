let saveEx = [
  {
    id: "2",
    name: "push press",
    weight: 0,
    set: 0,
    reps: 0,
  },
];

const saveExReducer = (state = saveEx, action) => {
  switch (action.type) {
    case "SAVE_EX":
      return action.payload;
      break;
    default:
      return state;
  }
};

export default saveExReducer;
