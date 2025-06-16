import React, { useState } from "react";
import "../css/navbar.css";
import Logo from "../assets/svg/valorant.svg";

/*
isi portfolio page
0. navbar
0.1 Hero section
1. About me
2. My value
3. Technical skills
4. Credits To
5. Portfolio
6. Footer
*/

function Navbar() {
  const [showNavbarText, setShowNavbarText] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isClicking, setClicking] = useState(false);

  const handleButtonClick = () => {
    if (isClicking) {
      return;
    }
    setClicking(true);

    if (showNavbarText === false) {
      setShowNavbarText(true);
      setTimeout(() => {
        setShowText(true);
        setClicking(false);
      }, 500);
    } else if (showNavbarText === true) {
      setShowNavbarText(false);
      setShowText(false);
      setTimeout(() => {
        setClicking(false);
      }, 500);
    }
  };

  return (
    <>
      <div
        className={`navbar-valo ${showNavbarText ? "show-navbar-text" : ""}`}
      >
        <div className="nav-header container-fluid">
          <button className="click-logo" onClick={handleButtonClick}>
            <div className="logo">
              <svg
                width="60px"
                height="60px"
                viewBox="0 0 82 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7382 54.3478L22.4504 54.0196C18.9965 50.0812 15.5426 46.1429 12.0887 42.2046C11.6569 41.7123 11.5328 41.2398 11.7163 40.7872C13.3567 32.0682 14.6896 23.3295 16.33 14.6105C16.5135 14.1579 16.5333 13.8495 16.8607 13.561C21.9353 9.08875 26.8461 4.76077 31.9207 0.288531C32.0844 0.144266 32.2481 -1.58941e-07 32.392 0.164097L32.5359 0.328195C29.3792 18.2385 26.2224 36.1489 22.9217 53.8951C22.9217 53.8951 22.758 54.0394 22.9019 54.2035L22.7382 54.3478Z"
                  fill="white"
                />
                <path
                  d="M49.7519 60.0001L49.4641 59.6719C46.0101 55.7336 42.5562 51.7952 39.1023 47.8569C38.6706 47.3646 38.5465 46.8921 38.7299 46.4395C40.3704 37.7206 41.7032 28.9818 43.3437 20.2629C43.5272 19.8102 43.547 19.5019 43.8743 19.2133C48.9489 14.7411 53.8598 10.4131 58.9344 5.94088C59.0981 5.79661 59.2618 5.65234 59.4057 5.81644L59.5496 5.98054C56.3928 23.8909 53.2361 41.8012 49.9354 59.5475C49.9354 59.5475 49.7717 59.6918 49.9156 59.8559L49.7519 60.0001Z"
                  fill="white"
                />
                <path
                  d="M50.9579 28.2254L50.7206 28.3956C47.8734 30.439 45.0261 32.4823 42.1789 34.5256C41.823 34.781 41.5015 34.8334 41.2144 34.6827C35.5538 33.0378 29.8587 31.5959 24.1981 29.951C23.911 29.8003 23.7082 29.7675 23.5398 29.5316C20.9292 25.8762 18.4029 22.3386 15.7924 18.6831C15.7082 18.5652 15.624 18.4473 15.7426 18.3621L15.8612 18.277C27.504 21.5145 39.1467 24.752 50.6709 28.0747C50.6709 28.0747 50.7551 28.1926 50.8737 28.1074L50.9579 28.2254Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
          {showText && (
            <p className="fixed-title">
              <a href="">My Portfolio Web</a>
            </p>
          )}
        </div>
        <div className="my-navigation container-fluid">
          <ul className="my-unordered-list">
            <li>
              <span className="my-icon">
                <svg
                  width="30px"
                  className="add-glow"
                  height="30px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                    fill="#ffff"
                    id="home"
                  />
                </svg>
              </span>
              {showText && <a href="">About me</a>}
            </li>
            <li>
              <span className="my-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="add-glow"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-code-slash text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
              </span>
              {showText && <a href="">My Value</a>}
            </li>
            <li>
              <span className="my-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="add-glow"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-laptop-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
                </svg>
              </span>
              {showText && <a href="">Technical Skills</a>}
            </li>
            <li>
              <span className="my-icon">
                <svg
                  className="add-glow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-heart-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
              </span>
              {showText && <a href="">Activities</a>}
            </li>
            <li>
              <span className="my-icon">
                <svg
                  className="add-glow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-list-columns-reverse text-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5m4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5m-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </span>
              {showText && <a href="">Portfolio</a>}
            </li>
          </ul>
        </div>
        <div className="my-navigation-footer container-fluid">
          <div className="row  my-footer-nav py-3">
            <div className="my-col col-4">
              <span className="my-icon">
                <svg
                  className="add-glow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-envelope-at-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                </svg>
              </span>
            </div>
            <div className="my-col col-8 d-flex align-items-end">
              {showText && (
                <a href="" className="contact-me">
                  Contact me!
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
