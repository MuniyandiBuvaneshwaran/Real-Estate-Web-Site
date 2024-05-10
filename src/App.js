import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import index from "./components/home/Index";
import Header from "./components/common/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" Component={index} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
