import React from "react";

function Option(props) {
  return (
    <li>
      {props.optionText}
      <button onClick={(e) => props.handleRemoveOption(props.optionText)}>
        Remove
      </button>
    </li>
  );
}

export default Option;
