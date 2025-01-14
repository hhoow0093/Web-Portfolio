import React from "react";
import "../css/AboutMe.css";
import Howard from "../assets/img/me/Howard.jpeg";
function AboutMe() {
    return (
        <div className="wrapper">
            <div className="dummy2"></div>
            <section className="about-me">
                <div className="transition-a"></div>
                <div className="transition-1">
                <div className="about-me-container ">
                        <img src={Howard} alt="" srcset="" className="profpic img-fluid" />
                        <div className="kata">
                            <h2>Howard</h2>
                            <h3>Student College</h3>
                            <h4>About me</h4>
                            <p>"I am a passionate learner and aspiring [field/profession, e.g., software developer] who thrives on exploring new challenges. With a growing knowledge of [specific skills, e.g., JavaScript, Unity, or responsive web design], I enjoy building creative projects that inspire and solve real-world problems. Beyond coding, I’m fascinated by storytelling and self-improvement, which fuel my journey in both personal and professional growth. My ultimate goal is to combine innovation and dedication to make a positive impact."</p>
                        </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;