import React from "react";
import "../css/Footer.css";
import H from "../assets/svg/Logo.svg";
import github from "../assets/svg/github.svg";
import linkedin from "../assets/svg/linkedin.svg";
import instagram from "../assets/svg/instagram.svg";
import youtube from "../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <div>
      <div className="wrapperfooter">
        <div className="dummyfooter"></div>
        <section className="footer">
          <section className="container-fluid">
            <div className="row justify-content-center">
              <div
                className="col-12 col-lg-4 order-3 order-xl-1"
                id="change-size"
              >
                <div className="container my-social-meds">
                  <div className="frame-sosmed">
                    <div className="my-logo">
                      {" "}
                      <img src={H} alt="Howard" />{" "}
                    </div>
                    <span className="logo-footer">Howard</span>
                    <div className="logo-sosmed">
                      <a href="https://github.com/hhoow0093">
                        <div className="github">
                          <img src={github} alt="" />
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/howard-80309928a/">
                        <div className="linkedin">
                          <img src={linkedin} alt="" />
                        </div>
                      </a>
                      <a href="https://www.instagram.com/howard_3125/">
                        <div className="insta">
                          <img src={instagram} alt="" />
                        </div>
                      </a>
                      <a href="https://www.youtube.com/@shock_55_">
                        <div className="youtube">
                          <img src={youtube} alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 order-1 order-xl-2 mt-5 mt-xl-0">
                <div className="container">
                  <div className="frame-sosmed-text-frame">
                    <div className="row">
                      <div className="col-12 heading-footer">Social Media</div>
                      <a href="https://www.instagram.com/howard_3125/"><div className="col-12 sub-heading-footer">Instagram</div></a>
                      <a href="https://www.linkedin.com/in/howard-80309928a/"><div className="col-12 sub-heading-footer">Linkedin</div></a>
                      <a href="https://www.youtube.com/@shock_55_"><div className="col-12 sub-heading-footer">Youtube</div></a>
                      <a href="https://github.com/hhoow0093"><div className="col-12 sub-heading-footer">Github</div></a>
                      <a href="mailto:howard@student.umn.ac.id"><div className="col-12 sub-heading-footer">Gmail</div></a>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4 order-2 order-xl-3 mt-5 mt-xl-0">
                <div className="container">
                  <div className="frame-sosmed-text-frame">
                    <div className="row">
                      <div className="col-12 heading-footer">Made With</div>
                      <a href="https://react.dev/learn"><div className="col-12 sub-heading-footer">React</div></a>
                      <a href="https://vite.dev/guide/"><div className="col-12 sub-heading-footer">Vite</div></a>
                      <a href="https://vercel.com/docs"><div className="col-12 sub-heading-footer">Vercel</div></a>
                      <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/"><div className="col-12 sub-heading-footer">Bootstrap</div></a>
                      <a href="https://gsap.com/docs/v3/GSAP/"><div className="col-12 sub-heading-footer">GSAP</div></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Footer;
