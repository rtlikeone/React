import React from "react";

const NumberItem = (props) => {
  const handleRemove = () => {
    return props.remove(props.value);
  };

  return (
    <div>
      {props.value}
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

// class NumberItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleRemove = this.handleRemove.bind(this);
//   }

//   handleRemove() {
//     return this.props.remove(this.props.value);
//   }

//   render() {
//     return (
//       <div>
//         {this.props.value}
//         <button onClick={this.handleRemove}>X</button>
//       </div>
//     );
//   }
// }

export default NumberItem;
