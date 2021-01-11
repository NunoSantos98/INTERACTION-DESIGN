import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TopNavigation from "../../Assets/Topnav.png"
import loadingGIF from "../../Assets/loading.gif"

import { faLeaf } from "@fortawesome/free-solid-svg-icons";



/* 
const StyledWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`;
const TopNav =styled.div`
width: 360px;
height: 80px;

`;

const styles = styled.image`

width: 135px;
height: 135px;
`;


const StyledHeader =styled.h1`
color: pink;
margin-left:13rem;
display:block;

font-size: 300%;


`;






const Week5 = () => {


    return(

        <StyledWrapper>
        <StyledHeader>Page in development</StyledHeader>
        <img src={loadingGIF} />

        </StyledWrapper>
    );


}

export default Week5;

*/

const Week5 =() =>{


return(    
<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );

}

export default Week5;
