import React from "react";

export const PageHeading = ({ heading, content }) => (
  <React.Fragment>
    <h2>{heading}</h2>
    <p className="py-1">{content}</p>
  </React.Fragment>
);
