import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const form = useRef();
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    const templateParams = {
      from_name: name + " " + email,
      to_name: "danielmansfield0711@gmail.com",
      feedback: message
    };

    emailjs
      .send(
        "service_4e8svjg",
        "template_4s1cawp",
        templateParams,
        "l25ogiv2WRle0hMC-"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div className="contact-me-card row">
        <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
          <span className="get-in-touch mx-4 my-6">Get in Touch</span>
          <div className="py-5 d-flex justify-content-center">
            <dotlottie-player
              src="https://lottie.host/4e3c9d32-a232-403c-bc18-2d1ae20f4adf/fqo5StJpB2.json"
              background="transparent"
              speed="1"
              style={{ width: "500px", height: "500px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
        <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
          <form
            ref={form}
            className="d-flex flex-column card-contact-right"
            onSubmit={sendEmail}
          >
            <div className="input-group my-3 d-flex flex-column">
              <label>Name</label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter your Name"
                className="input-groups"
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Enter your Email Address"
                className="input-groups"
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <label>Message</label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                placeholder="Enter your Message"
                className="input-groups"
              />
            </div>
            <div className="input-group my-3 d-flex flex-column">
              <input
                className="btn btn-success"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
