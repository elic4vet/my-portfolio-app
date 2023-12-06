import { useState } from "react";
import Snowfall from "react-snowfall";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
    </>
  );
}

export default App;
