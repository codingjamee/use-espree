import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as espree from "espree";
import Sample from "./Sample";

function App() {
  console.log(espree.parse(<Sample />));
  return <Sample />;
}

export default App;
