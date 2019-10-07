import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/otherpage">Other Page</Link>
      </div>
      <div className="App">
        <Route exact path="/" component={Fib}></Route>
        <Route exact path="/otherpage" component={OtherPage}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
