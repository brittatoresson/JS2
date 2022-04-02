import { combineReducers } from "redux";
import exerciseReducer from "./exerciseReducer";
import saveExReducer from "./saveExReducer";

const rootReducer = combineReducers({
  exerciseReducer,
  saveExReducer,
});

export default rootReducer;
