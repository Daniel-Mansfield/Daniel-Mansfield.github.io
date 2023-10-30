import React from "react";
import "./programming.css";

export default function Programming() {
  const value = [
    {
      text: "Java (Type) script",
      percentage: 90
    },
    {
      text: "Git",
      percentage: 90
    },
    {
      text: "React",
      percentage: 85
    },
    {
      text: "Java",
      percentage: 80
    },
    {
      text: "C#",
      percentage: 75
    },
    {
      text: "Node.js",
      percentage: 75
    },
    {
      text: "Python",
      percentage: 70
    },
    {
      text: "Swift",
      percentage: 70
    }
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-md-6 col-sm-12 my-2">
                  <span className="language">{value.text}</span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
