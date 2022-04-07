import { combineReducers } from "redux";
import exerciseReducer from "./exerciseReducer";
import saveExReducer from "./saveExReducer";
import saveWorkoutReducer from "./saveWorkoutReducer";
import saveRandomWodReducer from "./saveRandomWodReducer";

//combineReducer för att få tillgång till flera reducers
const rootReducer = combineReducers({
  exerciseReducer,
  saveExReducer,
  saveWorkoutReducer,
  saveRandomWodReducer,
});

export default rootReducer;
