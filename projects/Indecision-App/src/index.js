import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import NumberList from "./components/remove-num/NumberList";

ReactDOM.render(<App />, document.getElementById("root"));

class OldSyntax {
  constructor(name) {
    this.name = "Romero Lijkwan";
    this.getGreeting = this.getGreeting.bind(this);
  }

  hello = "This is when I say HELLO!!!";

  getGreeting() {
    return `Hi my name is ${this.name}. ${this.hello}`;
  }
}

const oldSynt = new OldSyntax();
const getGreeting = oldSynt.getGreeting;
console.log(getGreeting());

// -------------

class newSyntax {
  name = "Romson";

  getGreeting = () => {
    return `Hi my name is ${this.name}`;
  };
}

const newSynt = new newSyntax();
const newGetGreeting = newSynt.getGreeting;
console.log(newGetGreeting());
