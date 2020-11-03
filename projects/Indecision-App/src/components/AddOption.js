import React, { Component } from "react";

class AddOption extends Component {
  constructor(props) {
    super();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      error: undefined,
    };
  }

  handleFormSubmit(e) {
    // console.log(testing);
    e.preventDefault();
    const inputValue = e.target.option.value;
    const error = this.props.handleAddOption(inputValue);

    this.setState(() => ({ error }));

    e.target.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" id="option" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
