import { StrictMode } from "react";
import { render } from "react-dom";
import SeachParams from "./SearchParams";

const App = () => (
  <StrictMode>
    <div>
      <h1>Adopt Me</h1>
      <SeachParams />
    </div>
  </StrictMode>
);

render(<App />, document.getElementById("root"));
