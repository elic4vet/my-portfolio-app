import { useState } from "react";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
    </>
  );
}

export default App;
