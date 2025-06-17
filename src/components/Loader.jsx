import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../css/Loader.css";

const Loader = () => {
  const loaderRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

useEffect(() => {
  const timeout = setTimeout(() => {
    if (!loaded) {
      animateLoader();
      setLoaded(true);
    }
  }, 5000);

  const handleLoad = () => {
    clearTimeout(timeout);
    setTimeout(() => {
      animateLoader();
      setLoaded(true);
    }, 500);
  };

  if (document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => {
    window.removeEventListener("load", handleLoad);
    clearTimeout(timeout);
  };
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
      },
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
