import React from "react";
import "./education.css";

export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">University of Maryland</span>
            <span className="university-degree">
              Bachelors Degree in Computer Science
            </span>
          </div>
          <div>
            <span className="year-passedout">2017-2021</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Glenelg High School</span>
            <span className="university-degree">Highschool Diploma</span>
          </div>
          <div>
            <span className="year-passedout">2013-2017</span>
          </div>
        </div>
      </div>
    </>
  );
}
