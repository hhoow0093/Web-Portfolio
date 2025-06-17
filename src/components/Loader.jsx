import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../css/Loader.css";

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        animateLoader();
      }, 500);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const animateLoader = () => {
    const layers = loaderRef.current.querySelectorAll(".loader-layer");

    gsap.to(layers, {
      x: "-100%",
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.inOut",
      onComplete: () => {
        loaderRef.current.style.display = "none";
      }
    });
  };

  return (
    <div ref={loaderRef} className="loader-wrapper">
      <div className="loader-layer"></div>
      <div className="loader-layer"></div>
      <div className="loader-layer"></div>
    </div>
  );
};

export default Loader;
