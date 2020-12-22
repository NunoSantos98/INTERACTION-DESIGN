import React from "react";
import styled from "styled-components";
import "./App.css";
import Week1 from "./Components/Week1";
import Week2 from "./Components/Week2";
import Week3 from "./Components/Week3";
import Week4 from "./Components/Week4";
import Week5 from "./Components/Week5";
import Week6 from "./Components/Week6";
import Week7 from "./Components/Week7";
import Week8 from "./Components/Week8";
import Week9 from "./Components/Week9";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledNav = styled.ul`
  margin: 0 auto;
  justify-content: center;
  height: 200px;
  padding: 90px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.7);
  width: 100px;
  li {
    list-style: none;
    margin-right: 2%;
  }
`;

const StyledHeader = styled.h1`
  text-align: center;
`;

const Home = () => (
  <nav>
    <StyledHeader> Welcome to Interaction Design!</StyledHeader>
    <StyledNav>
      <li>
        <Link to="/Week1"> Week 1</Link>
      </li>

      <li>
        <Link to="/week2"> Week 2</Link>
      </li>
      <li>
        <Link to="/week3"> Week 3</Link>
      </li>
      <li>
        <Link to="/week4"> Week 4</Link>
      </li>
      <li>
        <Link to="/week5"> Week 5</Link>
      </li>
      <li>
        <Link to="/week6"> Week 6</Link>
      </li>
      <li>
        <Link to="/week7"> Week 7</Link>
      </li>
      <li>
        <Link to="/week8"> Week 8</Link>
      </li>
      <li>
        <Link to="/week9"> Week 9</Link>
      </li>
    </StyledNav>
  </nav>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Week1">
          <Week1 />
        </Route>
        <Route path="/Week2">
          <Week2 />
       </Route>
       <Route path="/Week3">
          <Week3 />
       </Route>
       <Route path="/Week4">
          <Week4 />
       </Route>
       <Route path="/Week5">
          <Week5 />
       </Route>
       <Route path="/Week6">
          <Week6 />
       </Route>
       <Route path="/Week7">
          <Week7 />
       </Route>
       <Route path="/Week8">
          <Week8 />
       </Route>
       <Route path="/Week9">
          <Week9 />
       </Route>
       <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;