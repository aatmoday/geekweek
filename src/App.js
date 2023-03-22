import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import Webdevset from "./Webdevset";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="bg"></div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/webdevset" element={<Webdevset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
