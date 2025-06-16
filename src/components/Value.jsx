import React, { useRef } from "react";
import "../css/Value.css";
import bookSVG from "../assets/svg/book.svg";
import phoenixSVG from "../assets/svg/phoenix.svg";
import clockSVG from "../assets/svg/clock.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Value = () => { 
  const cardsValue = useRef([]);
  const cardsShadow = useRef([]);
  const showTimeline = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.value-cards',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
      }
    })
    tl.fromTo(
      cardsValue.current[0],
      { x: -10, opacity: 0 },
      {x: 0, opacity: 1},
    );
        tl.fromTo(
      cardsValue.current[1],
      { x: -10, opacity: 0 },
      {x: 0, opacity: 1},
    );
            tl.fromTo(
      cardsValue.current[2],
      { x: -10, opacity: 0 },
      {x: 0, opacity: 1},
    );
    tl.fromTo(
      [cardsShadow.current[0], cardsShadow.current[1], cardsShadow.current[2]],
      { x: -20, opacity: 0 },
      {x: 0, opacity: 1},
    )
        const tl2 = gsap.timeline({
      scrollTrigger: ".next-timeline"
    })
        tl2.fromTo(
      showTimeline.current,
      { x: 150 },
      {x: 0, duration:1}
    )
    
  });
  return (
    <div className="wrapper">
      <div className="dummy"></div>
      <section className="my-value">
        <section className="value-cards row justify-content-center align-items-center">
          <div className="col-12 col-md-4">
            <div className="frame py-5">
              <div className="card" ref={(el) => (cardsValue.current[0] = el)}>
                <div className="overlay-shadow-2" ref={(el) => (cardsShadow.current[0] = el)}>
                  <img src={bookSVG} alt="" className="svg" />
                  <p className="text">eager to learn</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="frame">
              <div className="card" ref={(el) => (cardsValue.current[1] = el)}>
                <div className="overlay-shadow-2" ref={(el) => (cardsShadow.current[1] = el)}>
                  <img src={phoenixSVG} alt="" className="svg" />
                  <p className="text">preseverance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="frame py-5">
              <div className="card " ref={(el) => (cardsValue.current[2] = el)}>
                <div className="overlay-shadow-2" ref={(el) => (cardsShadow.current[2] = el)}>
                  <img src={clockSVG} alt="" className="svg" />
                  <p className="text">Consistency</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="transition-kotak-2">
          <div className="container-fluid ">
            <h1 className="next-timeline" ref={showTimeline}>TIMELINE</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Value;
