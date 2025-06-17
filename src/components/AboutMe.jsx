import React, { useRef } from "react";
import "../css/AboutMe.css";
import Howard from "../assets/img/me/Howard.jpeg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const photo = useRef();
  const mycard = useRef();
  const shadowCard = useRef();
  const showAboutMe = useRef();
  const showValue = useRef();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: ".img-frame",
    });
    tl.fromTo(
      [photo.current, mycard.current, shadowCard.current],
      { opacity: 0 },
      {
        opacity: 1,
        x: (index) => (index == 2 ? 20 : 0),
        y: (index) => (index == 2 ? 70 : 0),
        duration: (index) => (index == 1 ? 0.2 : 2.5),
      }
    );
    const tl2 = gsap.timeline({
      scrollTrigger: ".next-intro"
    });
    tl2.fromTo(
      showAboutMe.current,
      { x: 150 },
      {x: 0, duration:1}
    )
    const tl3 = gsap.timeline({
      scrollTrigger: ".next-value"
    })
        tl3.fromTo(
      showValue.current,
      { x: 150 },
      {x: 0, duration:1}
    )


  });

  return (
    <div className="wrapper">
      <div className="dummy2"></div>
      <section className="about-me">
        <div className="transition-kotak-1">
            <h1 className="next-intro" ref={showAboutMe}>About me</h1>
        </div>
        <section className="real-about-me" id="about-me">
          <div className="transition-stripes-1"></div>
          <section className="my-container-info row">
            <div className="col-12 col-md-4" id="more-pad1">
              <div className="my-frame-box">
                <div className="img-frame" ref={photo}>
                  <img src={Howard} alt="" srcset=""></img>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8" id="more-pad2">
              <div className="my-frame-box">
                <div className="overlay-shadow" ref={shadowCard}></div>
                <div className="my-description p-5 " ref={mycard}>
                  <div className="heading">
                    <h3>Howard</h3>
                    <h3>Student College</h3>
                    <h3>About me</h3>
                  </div>
                  <p className="description-text">
                    "I am an{" "}
                    <span className="bold-weight">informatics student</span>{" "}
                    currently enrolling in Universitas Multimedia Nusantara{" "}
                    <span className="bold-weight">5th Semester.</span> I have a
                    strong interest in developing{" "}
                    <span className="bold-weight">
                      web and mobile application
                    </span>
                    . I am also interested in{" "}
                    <span className="bold-weight">AI field.</span> i wanna learn
                    as much as possible to help anyone who needs my help. I am
                    currently seeking for{" "}
                    <span className="bold-weight">internship</span> as well to
                    learn real life tech skills that is used by the common
                    industries nowadays. If anyone is willingly to hire me,{" "}
                    <span className="bold-weight">please contact me.</span>"
                  </p>
                  <button className="my-button bold-weight "><span className="my-svg">View CV</span></button>
                </div>
              </div>
            </div>
          </section>
          <div className="transition-stripes-2"></div>
        </section>
        <div className="transition-kotak-2">
          <div className="container-fluid ">
            <h1 className="next-value" ref={showValue}>VALUE</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
