
import React from "react";
import './../styles/App.css';
import { Routes,Route } from "react-router-dom";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Home from "./Home";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/item/1" element={<Item1/>}/>
          <Route path="/item/2" element={<Item2/>}/>
          <Route path="/item/3" element={<Item3/>}/>
        </Routes>
    </div>
  )
}

export default App
