import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import * as espree from "espree";
import Sample from "./Sample";

function App() {
  const code = "<Sample />";
  const ast = espree.parse(code, {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  });

  console.log(JSON.stringify(ast, null, 2));

  return <Sample />;
}

export default App;
