import React from "react";
import ReactDOM from "react-dom";
import { Counter } from 'counter/Counter';
import { ArjunContainer } from 'arjuncontainer/ArjunContainer';

import "./index.css";

const App = () => (
  <div className="container">
    <div className="divsize1">
    <h2>Parent Application</h2>
    <h1>Container App</h1>
    </div>
    <div className="divsize2">
    <h2>Micro Frontend-1 Application</h2>
    <Counter />
    </div>
    <div className="divsize3">
    <h2>Micro Frontend-2 Application</h2>
    <ArjunContainer />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
