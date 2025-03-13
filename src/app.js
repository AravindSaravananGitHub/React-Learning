import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1>Hello World !!</h1>;

const components = (
  <div id="parent">
    <div id="childOne">
      <h1>Hi Child One</h1>
      <h2>Hi Child One</h2>
    </div>
    <div id="childTwo">
      <h1>Hi Child Two</h1>
      <h2>Hi Child Two</h2>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([heading, components]);
