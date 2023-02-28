import React from "react";
import { useState } from "react";
import { MobileComponent } from "./MobileComponent";
import { DesktopComponent } from "./DesktopComponent";

import "./App.css";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function HandleResize() {
    console.log(window.innerWidth);
    return setWidth(window.innerWidth);
  }
  window.addEventListener("resize", HandleResize);
  return (
    <div className="App">
      {width < 375 ? <MobileComponent /> : <DesktopComponent />}
    </div>
  );
}

export default App;
