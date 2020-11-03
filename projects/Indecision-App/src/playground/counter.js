class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    try {
      // fetch data from localStorage, parse it and set counter state
      const json = localStorage.getItem("counter");
      const counter = parseInt(json, 10);

      if (!isNaN(counter)) {
        this.setState({ counter });
      }
    } catch (e) {
      console.log("invalid data");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      // get data, stringify it and store in localStorage
      const json = JSON.stringify(this.state.counter);
      localStorage.setItem("counter", json);
    }
  }

  handleAddOne() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }

  handleMinusOne() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  handleReset() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
