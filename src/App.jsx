import { Route, Routes } from "react-router-dom";
import { Landing, Home, Detail, Create } from "./views/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
