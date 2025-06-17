import React, { useRef } from "react";
import "../css/Portfolio.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const showPortfolio = useRef();
  const showMyPortCards = useRef([]);
  const showMyPortShadow = useRef([]);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: ".next-portfolio",
    });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".portfolio-cards",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(showPortfolio.current, { x: 150 }, { x: 0, duration: 1 });

    tl2.fromTo(
      showMyPortCards.current[0],
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1 }
    );
    tl2.fromTo(
      showMyPortCards.current[1],
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1 }
    );
    tl2.fromTo(
      showMyPortCards.current[2],
      { x: -10, opacity: 0 },
      { x: 0, opacity: 1 }
    );
  });
  return (
    <div>
      <div className="wrapper">
        <div className="dummy"></div>
        <section className="portfolio" id="portfolio">
          <div className="transition-kotak-2">
            <div className="container-fluid ">
              <h1 className="next-portfolio" ref={showPortfolio}>
                PORTFOLIO
              </h1>
            </div>
          </div>
          <section className="portfolio-cards row justify-content-center">
            <div className="col-12 col-xl-4 py-4 frame-port">
              <div
                className="portfolio-card-bg"
                ref={(el) => (showMyPortShadow.current[0] = el)}
              >
                <div
                  className="portfolio-card-content"
                  id="konten-1"
                  ref={(el) => (showMyPortCards.current[0] = el)}
                >
                  <div className="text-haha">
                    <h1 className="valorant-header">Seadex Web</h1>
                    <p className="text-orbitron">
                      this is a company profile web app used for <span className="bold-weight">introducing
                      seadex coffee </span>company. in this project, our team uses 
                      <span className="bold-weight"> laravel</span> framework for faster production.{" "}
                    </p>
                  </div>
                  <button className="project-button">Project-Link</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 frame-port">
              <div
                className="portfolio-card-bg"
                ref={(el) => (showMyPortShadow.current[1] = el)}
              >
                <div
                  className="portfolio-card-content"
                  id="konten-2"
                  ref={(el) => (showMyPortCards.current[1] = el)}
                >
                  <div className="text-haha">
                    <h1 className="valorant-header">Diary Pool</h1>
                    <p className="text-orbitron">
                      This project is used for <span className="bold-weight">writing personal diary</span> for each
                      user. In this project, i explored more about javascript
                      library such as <span className="bold-weight">ejs and expressjs.</span>
                    </p>
                  </div>
                  <button className="project-button">Project-Link</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 py-4 frame-port">
              <div
                className="portfolio-card-bg"
                ref={(el) => (showMyPortShadow.current[2] = el)}
              >
                <div
                  className="portfolio-card-content"
                  id="konten-3"
                  ref={(el) => (showMyPortCards.current[2] = el)}
                >
                  <div className="text-haha">
                    <h1 className="valorant-header">UMN Event</h1>
                    <p className="text-orbitron">
                      This is a web application designed for <span className="bold-weight">maintaining
                      Universitas multimedia nusantara event.</span> In this Project, i
                      learnt how to developed a fullstack web application using
                      <span className="bold-weight">php + mysql database.</span>
                    </p>
                  </div>
                  <button className="project-button">Project-Link</button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
