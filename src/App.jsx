import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";

import P_M from "./Pages/Packages-Consult/Main";
import Packages from "./Pages/Packages-Consult/Packages";
import Consultation from "./Pages/Packages-Consult/Consultation";


import Articles from "./Pages/Articles/Articles";
import Products from "./Pages/Products/Products";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/packages&consultaion" element={<P_M />}>
          <Route path="packages" element={<Packages />} />
          <Route path="consultation" element={<Consultation />} />
        </Route>

        <Route path="/articles" element={<Articles />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
