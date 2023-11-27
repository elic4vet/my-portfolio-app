import { useState } from "react";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;
