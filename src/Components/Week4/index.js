import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Icon from "../../Assets/DeathStar.png";
import hideicon from "../../Assets/Invisible_eye.svg"
import Showicon from "../../Assets/Visible_eye.svg"
import TopNavigation from "../../Assets/Topnav.png"
import Checked from "../../Assets/Checked.svg"
import Unchecked from "../../Assets/Unchecked.svg"

 
const StyledWrapper = styled.div`
display: block;
align-items:center;
justify-content: center;
flex-direction:column;
height:100vh;
width: 360px;
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
color: #1e57f1;
margin-left:2rem;

`;

const StyledInput = styled.input`
background: #ffffff;
margin-Left:16px;
border: 1px solid #c7c7c7;
height:63px;
width:337px;
top:16px;
font-size:16px;
font:Roboto;
font-color: #000000 60%;
`;

const StyledIcon = styled.img `
width: 24px;
height: 24px;
margin-left: -10px;
`;

const StyledErrorText = styled.p`
color:red;
`;

const StyledButton=styled.button`
height:63px;
width:350px;
background: #1e57f1;
color:#ffffff;
text-align: center;
font-size:18px;
border:0;
cursor: pointer;
&:hover{
    background:red;
}
`;




const Week4 = () => {


    return(

        <StyledWrapper>
        
        
        <img src={TopNavigation} />

        <img src={Icon} style={{width:135,height:135,justifyContent:"center",marginTop:48,marginLeft:'auto',marginRight:'auto',display:'block'}}/>
        <p style={{top:36}}/>

        <StyledInput  type="text" name="email" placeholder="Email"/>
        
        <p style={{top:16}}/>

        <StyledInput  type="Password" name="Password" placeholder="Password"/>
        
        <p style={{top:16}}/>

    <StyledIcon src={Unchecked} style={{marginLeft:16}}/>
    
    <p style={{top:16,marginLeft:16}}> Forgot Password? </p>



        </StyledWrapper>
    );


}

export default Week4;