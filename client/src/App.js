import React, { useState } from "react";

import { Header, Navbar, Results } from "./components";
import requests from "./utils/tmdb";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
