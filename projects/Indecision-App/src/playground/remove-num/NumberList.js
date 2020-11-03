import React, { Component } from "react";
import NumberItem from "./NumberItem";

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);

    this.state = {
      nums: [1, 2, 3, 4, 5],
    };
  }

  remove(num) {
    // filter num out
    this.setState((prevState) => ({
      nums: prevState.nums.filter((c) => c !== num),
    }));
  }

  render() {
    let nums = this.state.nums.map((c) => (
      <NumberItem key={c} value={c} remove={this.remove} />
    ));

    return (
      <div>
        <h1>First Number</h1>
        <ul>{nums}</ul>
      </div>
    );
  }
}

export default NumberList;
