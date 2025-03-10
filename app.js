const heading = React.createElement("h1", {}, "Hello World!");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "childOne" }, [
    React.createElement("h1", {}, "H1 from chile one"),
    React.createElement("h2", {}, "H2 from chile one"),
  ]),
  React.createElement("div", { id: "childTwo" }, [
    React.createElement("h1", {}, "H1 from chile Two"),
    React.createElement("h2", {}, "H2 from chile Two"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([heading, parent]);
