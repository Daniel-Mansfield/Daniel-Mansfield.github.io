import React from "react";
import "./programming.css";

export default function Programming() {
  const value = [
    {
      text: "Javascript/Typescript",
      percentage: 80
    },
    {
      text: "ReactJS",
      percentage: 80
    },
    {
      text: "Java",
      percentage: 80
    },
    {
      text: "Python",
      percentage: 80
    },
    {
      text: "C#",
      percentage: 80
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
