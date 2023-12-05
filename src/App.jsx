import { useState } from "react";
import Snowfall from "react-snowfall";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <About />
      <Contact />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
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
