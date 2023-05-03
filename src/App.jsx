import { Route, Routes, useLocation } from "react-router-dom";
import { Landing, Home, Detail, Create, NotFound } from "./views/index";
import Footer from "./components/Footer/Footer"
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
        <Route path="*" element={<NotFound />} />
      </Routes>
        {/* {
          location.pathname !== "/" && (
            <Footer/>
          )
        } */}
    </div>
  );
}

export default App;
