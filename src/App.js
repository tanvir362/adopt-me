import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import SearchParams from "./SearchParams"

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" name="Tanvir" />
      </Router>
    </div>
      
  );
};

render(<App />, document.getElementById("root"));
