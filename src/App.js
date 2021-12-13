import React, { useState } from "react";
import "./App.css";
import { About, Contact, FAQ, Footer, Sponsors, Team } from "./components";

function App() {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className="App">
      <About isOn={isOn} setIsOn={setIsOn} />
      <FAQ isOn={isOn} />
      <Sponsors isOn={isOn} />
      <Team isOn={isOn} />
      <Contact isOn={isOn} />
      <Footer isOn={isOn} />
    </div>
  );
}

export default App;
