import React from "react";

function Action(props) {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePickOption}>
        What should I do?
      </button>
    </div>
  );
}

export default Action;
