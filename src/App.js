import "./App.css";
import React from "react";
import SongGrid from "./components/SongGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// These to be added to a separate page
const songs = [
  { id: 1, title: "Time Worth Wasting", spotifyId: "4cTM80qdJY6QZeFkgW2EGW" },
  { id: 2, title: "Next to Me", spotifyId: "4Z14v4HiY6itmTC3D8rxtK" },
  { id: 3, title: "Jealous", spotifyId: "0V8VoOrzAuiOGiN3xI3xPE" },
];

function App() {
  return (
    <>
    <div className="App-background">
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} /> */}
        </Routes>
      </Router>
      <div className="Title-container">
        <h1 className="Title">Jackson Weldon</h1>
        <h3 className="Description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
          adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
          pellentesque sem placerat in id. Placerat in id cursus mi pretium
          tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
        </h3>
      </div>
      </div>
    </> 
  );
}

export default App;
