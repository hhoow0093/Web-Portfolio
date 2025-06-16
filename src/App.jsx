import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import NavbarPhone from "./components/NavbarPhone";
import Value from "./components/Value";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import "./css/index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <NavbarPhone/>
      <Hero />
      <AboutMe />
      <Value />
      <Timeline />      
      <Portfolio/>
    </>
  );
}

export default App;
