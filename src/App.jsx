import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import NavbarPhone from "./components/NavbarPhone";
import Value from "./components/Value";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./css/index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Loader/>
      <Navbar />
      <NavbarPhone/>
      <Hero />
      <AboutMe />
      <Value />
      <Timeline />      
      <Portfolio />
      < Footer/>
    </>
  );
}

export default App;
