import "./App.css";
import Fetch from "./fetch";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchExercise from "./Components/SearchExercises";
import AddExercise from "./Components/AddExercise";

const redux = require("redux");

function App() {
  // const [state, setState] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  // async function fetchFunction() {
  //   try {
  //     const response = await fetch(API);
  //     const data = await response.json();
  //     setState(data);
  //   } catch (err) {
  //     throw err;
  //   }
  // }
  // store.dispatch({
  //   type: "FETCH",
  //   payload: state,
  // });
  // console.log(state);
  return (
    <main>
      <BrowserRouter>
        <h1> app.js</h1>

        <Routes>
          {/* <Route path="/" element={ <Start />}></Route> */}
          {/* <Route path="/search" element={<SearchExercise />}></Route> */}
          {/* <Route path="/" element={<App />}></Route> */}
          <Route path="/search" element={<Fetch />}></Route>
          <Route path="/add" element={<AddExercise />}></Route>
        </Routes>
        {/* <Link to="/">home</Link> */}
        <Link to="/search">sök</Link>
        <Link to="/add">add</Link>
      </BrowserRouter>
    </main>
  );
}

export default App;
