import React from "react";
import "./sass/App.scss";
import Wrapper from "./layout/Wrapper.js";
import ReactGA from "react-ga";

const App = () => {
  ReactGA.initialize("UA-166624020-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return <Wrapper />;
};

export default App;
