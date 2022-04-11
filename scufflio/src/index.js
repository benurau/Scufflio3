import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CanvasProvider } from "./CanvasContext";
import Socket from "./socket"



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="canvas/:username" element={<React.StrictMode><CanvasProvider><App/></CanvasProvider></React.StrictMode>}></Route>
      <Route path="/" element={<Home socket={Socket}/>}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);