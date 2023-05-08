import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ArjunContainer}  from "./components/ArjunContainer";

const App = () => (
  <div className="container">
   <ArjunContainer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
