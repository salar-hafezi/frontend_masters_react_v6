import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SeachParams from "./SearchParams";
import Details from "./Details";
import ErrorBoundary from "./ErrorBoundary";

const App = () => (
  <StrictMode>
    <ErrorBoundary>
      <div>
        <header>
          <Link to="/">
            <h1>Adopt Me</h1>
          </Link>
        </header>

        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<SeachParams />} />
        </Routes>
      </div>
    </ErrorBoundary>
  </StrictMode>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
