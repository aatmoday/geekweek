import React from "react";

import GlitchText from "./assets/images/glitch2.gif";

import Header from "./Header";

const App = () => {
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
          <div className="content">
            <h1 className="section-heading">About The Event</h1>
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
        </section>
        <section id="team" className="center-container">
          <h1 className="section-heading">TEAM</h1>
        </section>
        <section id="contact" className="center-container">
          <h1 className="section-heading">CONTACT US</h1>
        </section>
        <footer>COPYRIGHT %C%</footer>
      </main>
    </>
  );
};

export default App;
