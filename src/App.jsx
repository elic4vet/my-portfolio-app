import { useState } from "react";
import Snowfall from "react-snowfall";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Snowfall
  style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  
  }}
/>
    </>
  );
}

export default App;
