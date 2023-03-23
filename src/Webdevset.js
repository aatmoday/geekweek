import React from "react";

const Webdevset = () => {
  return (
    <section className="center-container">
      <h1 className="section-heading">Submission</h1>
      <a
        href="https://forms.gle/A4coaKcb1jkdZYH36"
        target="_blank"
        rel="noreferrer"
        className="link"
        disabled="true"
      >
        Abstract Idea Submission
      </a>
      <a
        href="https://forms.gle/gv4LChGtZ9T9hZ5A6"
        className="link"
        target="_blank"
        rel="noreferrer"
        disabled
        style={{ marginTop: "1rem" }}
      >
        Final Project Submission
      </a>
    </section>
  );
};

export default Webdevset;
