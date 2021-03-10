import React from "react";
// import addWork from "../data/functions/addWork.js";

function Work({ position, timeframe, bulletpoints }) {
  return (
    <React.Fragment>
      <div className="col-experience py-1">
        <div className="col-experience-big-child">
          <h3>{position}</h3>
        </div>
        <div className="col-experience-small-child">
          <h3>{timeframe}</h3>
        </div>
      </div>

      <div className="col-list-items">
        <ul>{bulletpoints}</ul>
      </div>
    </React.Fragment>
  );
}

export default Work;
