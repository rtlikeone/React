import React from "react";
import Option from "./Option";

function Options(props) {
  return (
    <div>
      <p>Options: {props.options.length}</p>
      {props.options.length === 0 && <p>Add some items to get started!</p>}
      <ul>
        {props.options.map((optionText) => (
          <Option
            key={optionText}
            optionText={optionText}
            handleRemoveOption={props.handleRemoveOption}
          />
        ))}
      </ul>
      <p>
        <button onClick={props.handleRemoveAll}>Remove all</button>
      </p>
    </div>
  );
}

export default Options;
