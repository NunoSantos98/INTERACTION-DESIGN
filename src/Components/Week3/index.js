import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const StyledWrapper = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

`;


const StyledButton = styled.button`

color: #fff;
background-color: ${(props) => props.color};
padding: 1rem 2rem;
font-size: 1.5rem;
border: 0;
border-radius:0.25rem;
box-shadow: 0 0 0.5rem rgba(0,0,0.3);
cursor:pointer;
margin:2%;

&:hover {
    padding: 1rem 3rem;

    transition: 0.5s all ease-out;

}

`;

const StyledBorderButton = styled.button`

color: ${(props) => props.color};
background-color: transparent;
padding: 1rem 2rem;
font-size: 1.5rem;
border: 1px solid ${(props) => props.color};
border-radius: 0.25rem;
cursor: pointer;
margin: 2%;

&:hover {
    color: #fff;
    background-color: ${(props) => props.color};
    transition: 0.2s all ease-out;

}
    
`;


export const Button = (props) =>{

    const {children,color} = props;

    return <StyledButton color={color}>{children}</StyledButton>


};

export const BorderButton = (props) =>{

    const {children,color} = props;

    return <StyledBorderButton color={color}>{children}</StyledBorderButton>


};

const Home = () => (
    
    <Switch>
  <Route exact path='/' component={Home}/>
 
</Switch>

    );


const Week3 = () => {
    return (
    

    <StyledWrapper>
        <Button color="#1C2B32">Button 1</Button>
        <Button color="#55758C">Button 2</Button>
        <Button color="#7AAFD7">Button 3</Button>
        

        <BorderButton color="#1C2B32">Button 1</BorderButton>
        <BorderButton color="#55758C">Button 2</BorderButton>
        <BorderButton color="#7AAFD7">Button 3</BorderButton>
    
    </StyledWrapper>
    
    );


};

export default Week3;