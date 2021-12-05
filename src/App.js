import { render } from "react-dom";
import Pet from "./Pet";

const App = () => (
  <div>
    <h1>Adopt Me</h1>
    <Pet name="Jason" />
    <Pet name="John" />
    <Pet name="Mooly" />
  </div>
);

render(<App />, document.getElementById("root"));
