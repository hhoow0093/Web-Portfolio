import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../css/Timeline.css";
import palette from "../assets/svg/palette-fill.svg";
import pc from "../assets/svg/pc.svg";
import braces from "../assets/svg/braces.svg";

const Timeline = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="dummy"></div>
        <section className="timeline">
          <VerticalTimeline animate={true} lineColor="#3C0000">
            <VerticalTimelineElement
              position="right"
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3C0000", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #3C0000",
              }}
              date="January - August 2024"
              iconStyle={{
                background: "#3C0000",
                color: "#fff",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <img
                  src={palette}
                  alt="palette"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">Illustrator</h3>
              <h4 className="vertical-timeline-element-subtitle">
                ppif committee - Universitas multimedia nusantara
              </h4>
              <p className="my-text-timeline">
                Learned how to <span className="bold-weight">collaborate</span>{" "}
                with teams <span className="bold-weight">efficiently</span> and
                strengthen software foundational skills in{" "}
                <span className="bold-weight">figma</span> and{" "}
                <span className="bold-weight">krita</span>.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              position="left"
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3C0000", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #3C0000",
              }}
              date="January - June 2025"
              iconStyle={{
                background: "#3C0000",
                color: "#fff",
                padding: "0.7rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <img
                  src={pc}
                  alt="pc"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                laboratory teaching assistant
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                universitas multimedia nusantara
              </h4>
              <p className="my-text-timeline">
                Assisted junior students in learning{" "}
                <span className="bold-weight">Operating system</span> and{" "}
                <span className="bold-weight">frontend development</span>.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              position="right"
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#3C0000", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #3C0000",
              }}
              date="January - now"
              iconStyle={{
                background: "#3C0000",
                color: "#fff",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <img
                  src={braces}
                  alt="braces"
                  style={{ width: "100%", height: "100%" }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                informatics community
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                universitas multimedia nusantara
              </h4>
              <p className="my-text-timeline">
                Currently joining <span className="bold-weight">HMIF</span>{" "}
                (Himpunan mahasiswa informatika) to maximize teamwork
                efficiently
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
