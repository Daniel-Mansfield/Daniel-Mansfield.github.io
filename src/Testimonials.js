import React from "react";
import "./testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Eli",
      text: "This guy is incredibly awesome!"
    },
    {
      name: "Justin",
      text: "Daniel... he's just super cool!"
    },
    {
      name: "Craig",
      text: "I have rock hands and even I'd clap for Daniel Mansfield!"
    }
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                <div className="card shadow testimonial-card d-flex flex-column">
                  <span className="description">{value.text}</span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
