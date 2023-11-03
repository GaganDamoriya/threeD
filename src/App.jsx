import { useState, useEffect } from "react";
import "./App.css";
import TestCube from "./assets/components/testCube/TestCube";
import TestSphere from "./assets/components/testSphere/TestSphere";
import Navbar from "./assets/components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      {/* <TestCube /> */}
      <Navbar />
      <TestSphere />
    </div>
  );
}

export default App;
