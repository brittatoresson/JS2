import { combineReducers } from "redux";
import exerciseReducer from "./exerciseReducer";
import saveExReducer from "./saveExReducer";
// import removeExReducer from "./removeExReducer";

const rootReducer = combineReducers({
  exerciseReducer,
  saveExReducer,
  // removeExReducer,
});

export default rootReducer;
