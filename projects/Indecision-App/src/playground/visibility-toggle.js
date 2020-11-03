class Visibility extends React.Component {
  constructor() {
    super();
    this.toggleVisibility = this.toggleVisibility.bind(this);

    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    this.setState((prevState) => ({ visibility: !prevState.visibility }));

    console.log(this.state.visibility);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide text" : "Show text"}
        </button>

        {this.state.visibility && (
          <p>This is some text that only shows when this.state === TRUE</p>
        )}
      </div>
    );
  }
}

const appRoot = document.querySelector("#root");
ReactDOM.render(<Visibility />, appRoot);

// let clicked = false;
// let showText = "Hello there!";

// function visibilityBTN(e) {
//   clicked = !clicked;
//   render();
// }

// function showText() {
//   console.log("Button clicked!");
// }

// function render() {
//   const output = (
//     <div>
//       <h1>Visibility Toggle</h1>

//       <button onClick={visibilityBTN}>
//         {clicked ? "Hide details" : "Show details"}
//       </button>

//       {clicked && <p>{showText}</p>}
//     </div>
//   );

//   ReactDOM.render(output, appRoot);
// }

// const appRoot = document.querySelector("#root");

// render();
