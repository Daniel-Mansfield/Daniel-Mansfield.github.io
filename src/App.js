import { useEffect, useState, useRef } from "react";
import "./styles.css";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
import Contact from "./Contact";
import Typed from "typed.js";

export default function App() {
  const [education, setEducation] = useState(true);
  const [workHistory, setWorkHistory] = useState(false);
  const [programming, setProgramming] = useState(false);
  const [opennav, setOpennav] = useState(false);

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎",
        "Full Stack Developer",
        "Active Team Member"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      autoInsertCss: true,
      showCursor: false
    });

    return () => {
      typed.destroy();
    };
  }, []);

  function SetAllFalse() {
    setEducation(false);
    setWorkHistory(false);
    setProgramming(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }

  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex align-items-center">
            Daniel Mansfield
          </span>
          <div className="bars mx-2" onClick={() => setOpennav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all"
            : "d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all"
        }
      >
        <span className="brand-name">Daniel Mansfield</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setOpennav(false)}
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setOpennav(false)}
          >
            About Me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setOpennav(false)}
          >
            Resume
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setOpennav(false)}
          >
            Contact Me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm{" "}
                <span className="name-Im-text">Daniel Mansfield</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              ></span>
              <span className="Im-text-subheading">
                Knack for building applications with front-end and back-end
                operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Contact Me
                </a>
                <a
                  href="https://res.cloudinary.com/dyu3gbgum/image/upload/v1697660622/DanielMansfieldResume_ntluz4.jpg"
                  className="btn-resume-me"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img my-5">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://media.licdn.com/dms/image/D4E03AQGieymJjve2Kg/profile-displayphoto-shrink_800_800/0/1698102981869?e=1703721600&v=beta&t=pcEBJJTYGlR-Gh9KtuHIIo9gUJjDlu1c4OZmPw3za0Y"
              ></img>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            About Me
          </span>
          <span className="why-text-sub">Why Choose Me?</span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <dotlottie-player
                className="lottie-1"
                src="https://lottie.host/ba92edce-ea15-4c4a-b8bd-5c7c525ad976/3mUR3eV2Pq.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column justify-content-center">
              <span className="some-text-about-me">
                Full Stack Web and Mobile Developer
              </span>
              <span className="few-highlights">
                <span className="few-text">Here are a Few Highlights</span>
                <span className="few-list">
                  <ul>
                    <li>Team-Oriented, Agile Developer</li>
                    <li>Creative & Interactive Front End Design</li>
                    <li>React and Typescript</li>
                    <li>Java and C#</li>
                    <li>MongoDB, PostgreSQL, MSSQL</li>
                    <li>Proficient in Python and C</li>
                    <li>Experience with Node, Docker, Flask, and Swift</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>
        <span className="why-text-sub">My Formal Bio Details</span>
        <div
          className="resume-new-section row"
          id="resume"
          style={{ width: "70%", marginInline: "auto" }}
        >
          <div className="col-lg-4 col-md-4 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span className="icons-span">
                <i className="fa-solid fa-graduation-cap"></i>
              </span>
              <span className="icons-span">
                <i className="fa-solid fa-briefcase"></i>
              </span>
              <span className="icons-span">
                <i className="fa-regular fa-file-code"></i>
              </span>
            </div>
            <div className="d-flex flex-column">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setEducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workHistory === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setWorkHistory, true);
                }}
              >
                Work
              </span>
              <span
                className={
                  programming === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setProgramming, true);
                }}
              >
                Programming
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workHistory === true && <Work />}
            {programming === true && <Programming />}
          </div>
        </div>
      </div>
      <div className="contact-me-part py-4" id="contactme">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <span className="why-text-sub mb-5">Let's Keep in Touch!</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
