import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Characters from "./pages/Characters";
import Episode from "./pages/Episode";
import Location from "./pages/Location";
import CharactersDetails from "./pages/CharactersDetails";
import EpisodeDitails from "./pages/EpisodeDitails";
import LocationDetails from "./pages/LOcationDetails";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/characters/:id" element={<CharactersDetails/>}/>
          <Route path="/episode" element={<Episode />} />
          <Route path="/episode/:id" element={<EpisodeDitails />} />
          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<LocationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
