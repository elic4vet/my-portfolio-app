import About from "./components/About/About";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
