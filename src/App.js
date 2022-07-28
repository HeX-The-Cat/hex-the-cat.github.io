import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Gear from './pages/Gear';
import Games from './pages/Games';
import PopUp from "./src_components/PopUp";

function App() {
  const[buttonPopUp, setButtonPopUp] = useState(true);
  return (
    <div>
      <PopUp trigger={buttonPopUp} setTrigger={setButtonPopUp} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Gear" element={<Gear />} />
            <Route path="Games" element={<Games />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
