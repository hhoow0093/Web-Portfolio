import React, { useEffect, useState, useRef } from "react";
import "../css/Hero.css";
import Fade from "../assets/img/character/fade.png";
import Dark from "../assets/img/character/dark.png";
import Yoru from "../assets/img/character/yoru-new.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);   

function Hero() {
  const [currentImage, setCurrentImage] = useState(Fade);
  const [currentFade, setCurrentFade] = useState("");
  const indexRef = useRef(0);
  const overlay1 = useRef();
  const overlay2 = useRef();
  const mytext = useRef();
  const character = useRef();
  useGSAP(() => { 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.my-hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        // markers: true,
        
      }
    });
  
    tl.fromTo(
      [overlay1.current, character.current, overlay2.current, mytext.current],
      { x: 0, opacity: 1 },
      { 
        x: (index) => index < 2 ? -100 : 100, 
        opacity: 0,
        stagger: 0 
      }
    );
  });

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
      <section className="my-hero-section container-fluid">
        <div className="overlay1" ref={overlay1}></div>
        <div
          className={`character-overlay ${currentFade}`}
          style={{ backgroundImage: `url(${currentImage})` }}
          ref={character}
        ></div>
        <div className="my-text" ref={mytext}>
          <h2>Passionate, Creative, and Ready to Innovate!</h2>
          <h3>Howard</h3>
        </div>
        <div className="overlay2" ref={overlay2}></div>
      </section>
    </div>
  );
}

export default Hero;
