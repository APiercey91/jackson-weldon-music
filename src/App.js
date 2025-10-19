import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

//import Home from "./pages/Home";
//import Shows from "./pages/Shows";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
