import React from "react";
import styled from "styled-components";
import "./App.css";
import { Container, Row, Col } from 'react-grid-system';

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


const StyledSpan =styled.span`
justify-content: center;
align-items: center;
display: flex;
margin-top: 17%;
font-family: sans-serif;
font-size: large;
font-weight: 700;
color:#F8F8FF;

`;

const Linkable =styled.link`
text-decoration:none;
`;



const StyledHeader = styled.h1`
  text-align: center;
  margin-bottom:5%;
`;

const Home = () => (
  <div>
      <StyledHeader> Welcome to Interaction Design!</StyledHeader>

  <Container fluid>
  <Row justify="center"style={{ height: '100px' }} debug> 
   <Col style={{backgroundColor:"#006466"}} md={2} debug><StyledSpan style={{color:"#808080"}}>Week 1</StyledSpan></Col>
   <Col style={{backgroundColor:"#065a60"}} md={2} offset={{ md: 1}}debug><StyledSpan style={{color:"#808080"}}>Week 2</StyledSpan></Col>
   <Col style={{backgroundColor:"#0b525b"}} md={2} offset={{ md: 1}} debug><Link to="/Week3" style={{ textDecoration: 'none' }}><StyledSpan>Week 3</StyledSpan></Link></Col>
  </Row>
  <br/>
  <Row justify="center" style={{ height: '100px' }} debug>   
  <Col style={{backgroundColor:"#144552"}} md={2} debug><StyledSpan style={{color:"#808080"}}>Week 4</StyledSpan></Col>
  <Col style={{backgroundColor:"#1b3a4b "}} md={2} offset={{ md: 1}} debug><StyledSpan style={{color:"#808080"}}>Week 5</StyledSpan></Col>
  <Col style={{backgroundColor:"#212f45"}} md={2} offset={{ md: 1}} debug> <Link to="/Week6" style={{ textDecoration: 'none' }}><StyledSpan>Week 6</StyledSpan></Link></Col>
  </Row>
  <br/>
  <Row justify="center" style={{ height: '100px' }} debug>   
   <Col style={{backgroundColor:"#272640"}} md={2} debug><Link to="/Week7" style={{ textDecoration: 'none' }}><StyledSpan>Week 7</StyledSpan></Link></Col>
   <Col style={{backgroundColor:"#312244"}} md={2} offset={{ md: 1}} debug><Link to="/Week8" style={{ textDecoration: 'none' }}><StyledSpan>Week 8</StyledSpan></Link></Col>
   <Col style={{backgroundColor:"#3e1f47"}} md={2} offset={{ md: 1}} debug><Link to="/Week9" style={{ textDecoration: 'none' }}><StyledSpan>Week 9</StyledSpan></Link></Col>
  <br/>
  </Row>
</Container>
</div>
  
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