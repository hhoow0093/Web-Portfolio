import React from "react";
import "../css/AboutMe.css";
import Howard from "../assets/img/me/Howard.jpeg";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);   

function AboutMe() {
    // useGSAP({

    // })

    return (
        <div className="wrapper">
            <div className="dummy2"></div>
            <section className="about-me">
                <div className="transition-kotak-1"></div>
                <section className="real-about-me">
                    <div className="transition-stripes-1"></div>
                    <section className="my-container-info">

                    </section>
                    <div className="transition-stripes-2"></div>
                </section>
                <div className="transition-kotak-2"></div>
            </section>
        </div>
    )
}

export default AboutMe;