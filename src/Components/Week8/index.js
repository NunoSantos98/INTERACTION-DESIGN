import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import TopNavigation from "../../Assets/Topnav.png"
import loadingGIF from "../../Assets/loading.gif"
 
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






const Week8 = () => {


    return(

        <StyledWrapper>
        <StyledHeader>Page in development</StyledHeader>
        <img src={loadingGIF} />

        </StyledWrapper>
    );


}

export default Week8;