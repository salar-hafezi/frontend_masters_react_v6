/* global React ReactDOM */
const Pet = (props) =>
  React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, "Mooly"),
  ])

const App = () =>
  React.createElement("div", {}, [
    React.createElement("h1", { id: "test" }, "Adopt Me"),
    React.createElement(Pet, { name: "Lune", animal: "dog" }),
  ]);

ReactDOM.render(React.createElement(App), document.getElementById("root"));
