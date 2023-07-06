import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClassSchedule from "./ClassSchedule/ClassSchedule";
import Cart from "./Cart/Cart";

function Approutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ClassSchedule />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default Approutes;
