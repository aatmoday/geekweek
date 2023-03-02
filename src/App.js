import React, { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlinePhone,
} from "react-icons/ai";

import GlitchText from "./assets/images/glitch2.gif";

import Header from "./Header";

import events from "./events";
import EventContainer from "./EventContainer";

const App = () => {
  const [currEvent, setCurrEvent] = useState(0);
  return (
    <>
      <Header />
      <div className="bg"></div>
      <main>
        <section className="center-container">
          <div className="glitch-container">
            <img src={GlitchText} alt="GEEK WEEK" className="glitch-center" />
          </div>
        </section>
        <section id="about" className="center-container">
          <h1 className="section-heading">About The Event</h1>
          <div className="content">
            <p>
              <strong>Geek-वीक</strong> is an annual 6 Day long Tech Fest
              organized by the Coding Club of
              <strong> AATMODAY</strong> (Student's Hobby Club) at Chhatrapati
              Shahu Ji Maharaj University. <br /> This year, Geek वीक brings you
              all an array of amazing tech events, with a lot of prizes to bag
              and a lot of fun to have! <br /> We invite you to be a part of
              this amazing fun-filled week for tech freaks! <br /> At Geek Week,
              there is something for everyone! Even if you are a techie or not,
              there are many events like{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: "700",
                }}
              >
                Open Mic, Share yo Shayari, Standup Comedy, Solo Singing, Arm
                Wrestling and other such events
              </span>{" "}
              where everyone gets a chance to prove their mettle! <br /> So what
              are you waiting for?!{" "}
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: "700",
                  animation: "glitch 0.5s infinite",
                  fontSize: "1.5rem",
                  letterSpacing: "0.15rem",
                }}
              >
                REGISTER NOW
              </span>{" "}
              to be a part of this awesome Tech Fest in your own city,{" "}
              <strong> Kanpur</strong>!
            </p>
            <div className="links-container">
              <a
                href="https://forms.gle/5PiChuKjdt9vEoKAA"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                REGISTRATION LINK <br /> <span>(IN-CAMPUS STUDENTS)</span>
              </a>
              <a
                href="https://forms.gle/anbSfBdusYdhcLQA6"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                REGISTRATION LINK <br />
                <span>(OFF-CAMPUS STUDENTS)</span>
              </a>
            </div>
          </div>
        </section>
        <section id="events" className="center-container">
          <h1 className="section-heading">EVENTS</h1>
          <div className="content">
            <div className="slide-container">
              <button
                className="show-prev toggle"
                onClick={() => {
                  if (currEvent === 0) {
                    setCurrEvent(events.length - 1);
                  } else {
                    setCurrEvent(currEvent - 1);
                  }
                }}
              >
                <BsChevronCompactLeft />
              </button>
              <EventContainer details={events[currEvent]} />
              <button
                className="show-next toggle"
                onClick={() => {
                  if (currEvent === events.length - 1) {
                    setCurrEvent(0);
                  } else {
                    setCurrEvent(currEvent + 1);
                  }
                }}
              >
                <BsChevronCompactRight />
              </button>
            </div>
          </div>
        </section>
        {/* <section id="team" className="center-container">
          <h1 className="section-heading">TEAM</h1>
        </section> */}
        <section id="contact" className="center-container">
          <h1 className="section-heading">CONTACT US</h1>
          <div className="content">
            <a href="tel: 9565292335" className="contact-link">
              <AiOutlinePhone className="link-icon" /> +91 9565292335
            </a>{" "}
            <br />
            <a href="mailto:aatmoday@csjmu.ac.in" className="contact-link">
              <AiOutlineMail className="link-icon" /> aatmoday@csjmu.ac.in
            </a>{" "}
            <br />
            <a
              href="https://instagram.com/code_vidya_csjmu"
              className="contact-link"
            >
              <AiOutlineInstagram className="link-icon" /> @code_vidya_csjmu
            </a>
          </div>
        </section>
        {/* <section className="center-container sponsors">
          <h1 className="section-heading">Our Sponsors</h1>
          <div className="content"></div>
        </section> */}
        <footer>
          COPYRIGHT © {new Date().getFullYear()} Geek-वीक AATMODAY, CSJM
          UNIVERSITY - ALL RIGHTS RESERVED
        </footer>
      </main>
    </>
  );
};

export default App;
