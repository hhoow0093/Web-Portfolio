import React, { useEffect, useState, useRef } from "react";
import "../css/Hero.css";
import Fade from "../assets/img/character/fade.png";
import Dark from "../assets/img/character/dark.png";
import Yoru from "../assets/img/character/yoru-new.png";

function Hero() {
    
    const [currentImage, setCurrentImage] = useState(Fade);
    const [currentFade, setCurrentFade] = useState("");
    const indexRef = useRef(0);
    

    useEffect(() => {
        const images = [Fade, Yoru, Dark];
        const interval = setInterval(() => {
            indexRef.current = (indexRef.current + 1) % images.length;
            setCurrentFade("fade-in");
            setCurrentImage(images[indexRef.current]);
            setTimeout(() => {
                setCurrentFade("");
            }, 1000);
        }, 5000);
        return () => clearInterval(interval);

    }, []);
    

  return (
    <div className="wrapper">
      <div className="dummy"></div>
      <section className="my-hero-section">
        <div className="overlay1"></div>
        <div
          className={`character-overlay ${currentFade}`}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div className="my-text slide-left">
          <h2>Passionate, Creative, and Ready to Innovate!</h2>
          <h3>Howard</h3>
        </div>
        <div className="overlay2"></div>
      </section>
    </div>
  );
}

export default Hero;
