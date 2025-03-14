import React from "react";
import ReactDOM from "react-dom/client";

const Parent = () => {
  return (
    <div>
      <div id="childOne">
        <h1>Hi from child one react component</h1>
        <h2>H2 from child one react component</h2>
      </div>
      <div id="childTwo">
        <h1>Hi from child two react component</h1>
        <h2>H2 from child two react component</h2>
      </div>
    </div>
  );
};

const Heading = () => {
  return (
    <h1 className="heading" id="head">
      Hello World in React functional components
    </h1>
  );
};

const Components = () => {
  return (
    <div>
      <Heading />
      <Parent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Components />);
