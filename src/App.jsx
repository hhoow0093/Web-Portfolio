import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import NavbarPhone from "./components/NavbarPhone";
import "./css/index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <NavbarPhone/>
      <Hero />
      <AboutMe/>
    </>
  );
}

export default App;
