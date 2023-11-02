import { useState, useEffect } from "react";
import "./App.css";
import TestCube from "./assets/components/testCube/TestCube";
import TestSphere from "./assets/components/testSphere/TestSphere";

function App() {
  return (
    <div className="app">
      {/* <TestCube /> */}
      <TestSphere />
    </div>
  );
}

export default App;
