import React from "react";
import "./work.css";

export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">UJA Federation of New York</span>
            <span className="year-passedout">2022-Present</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer</span>
          <span className="description-position">
            <ul>
              <li>Front-end development with Typescript, React</li>
              <li>
                Back-end development with C#, .Net Core, Docker, Node.js, APIs
              </li>
              <li>Project managed using Agile, JIRA and Github</li>
            </ul>
          </span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">
              Johns Hopkins Applied Physics Lab
            </span>
            <span className="year-passedout">2018-2021</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Software Engineer Intern</span>
          <span className="description-position">
            <ul>
              <li>
                Improved Unity3D submersible vehicle simulation by writing an
                automated terrain generator that ingests GEOTIFF data,
                integrating player virtual avatars, and composing a 3D sonar
                visualization
              </li>
              <li>
                Front-end and back-end features on a team based, large-scale web
                project. Upgraded core 3D geospatial visualization functionality
                with the CesiumJS API
              </li>
              <li>
                Accumulated census data to triple land mass coverage of missile
                risk-management tools.
              </li>
            </ul>
          </span>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">
              UMD Innovation & Research Experience
            </span>
            <span className="year-passedout">2017-2018</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">VR/AR/iOS Development</span>
          <span className="description-position">
            <ul>
              <li>
                Researched VR, AR, and Beacon Technology for the Phillips
                Collection in order to achieve a more interactive and immersive
                experience at the gallery
              </li>
              <li>
                Developed an AR iOS application in XCode where the user can view
                paintings in 3D
              </li>
              <li>
                Developed a VR application in Unity where the user can take
                virtual tours of the gallery
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
