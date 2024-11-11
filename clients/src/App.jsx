import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";

import TestimonialsSection from "./pages/TestimonialsSection";
import HowToPlays from "./pages/HowToPlay";
import HowToDownload from "./pages/HowToDownload";
import FantasyPointSystem from "./pages/FantasyPointSystem";
import FantasySportsTips from "./pages/TipsTricks";
import FantasyCricket from "./pages/FantasyCricket";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testimonials" element={<TestimonialsSection />} />
        <Route path="/how-to-play" element={<HowToPlays />} />
        <Route path="/how-to-download" element={<HowToDownload />} />
        <Route path="/points-system" element={<FantasyPointSystem />} />
        <Route path="/tips-tricks" element={<FantasySportsTips />} />
        <Route path="/fantasy-cricket" element={<FantasyCricket />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
