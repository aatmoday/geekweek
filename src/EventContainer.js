import React from "react";

import "./EventContainer.css";

const EventContainer = ({ details }) => {
  return (
    <div className="event-container">
      <div className="left">
        <h2 className="event-title">{details.eventTitle}</h2>
        <p className="date">{details.date}</p>
      </div>
      <div className="right">
        {details.details.map((e) => {
          return <li className="event-detail">{e}</li>;
        })}
      </div>
    </div>
  );
};

export default EventContainer;
