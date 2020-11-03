console.log("App running");

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePickOption = this.handlePickOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);

    this.state = {
      options: props.options,
    };
  }

  componentDidMount() {
    try {
      // getItem to fetch data from localStorage based on "keyname" and parse to save in array
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      this.setState({ options });
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.state.options) {
      // stringify data to store in localStorage with setItem
      const json = JSON.stringify(this.state.options);
      // "keyname" and value (setItem, 2 arguments)
      localStorage.setItem("options", json);
    }
  }

  handlePickOption() {
    const rand = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[rand]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Add new option to start!";
    } else if (this.state.options.indexOf(option) > -1) {
      return "You've already added this option!";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handleRemoveOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((opt) => opt !== option),
    }));
  }

  handleRemoveAll() {
    this.setState(() => ({ options: [] }));
  }

  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hand of a computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleRemoveOption={this.handleRemoveOption}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

function Action(props) {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePickOption}>
        What should I do?
      </button>
    </div>
  );
}

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

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      error: undefined,
    };
  }

  handleFormSubmit(e) {
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
        <form action="" onSubmit={this.handleFormSubmit}>
          <input type="text" id="option" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"));
