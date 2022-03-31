// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import exerciseReduder from "./Reducers/exerciseReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { addEx } from "./Actions/exerciseAction";

export const store = createStore(
  exerciseReduder,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
///OKLART
store.subscribe(() => console.log(store.getState()));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
