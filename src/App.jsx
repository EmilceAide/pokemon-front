import { Route, Routes, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Create } from "./views/index";
import Nav from "./components/Nav/Nav";

import "./App.css";

function App() {

  const location = useLocation();

  return (
    <div className="App">

      {location.pathname !== "/" && (  
        <Nav />
      )}
      <Routes>
        <Route path="/" exact element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/pokemon/:id" element={<Detail />}></Route>
        <Route path="/pokemons/:page" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </div>
  );
}

export default App;
