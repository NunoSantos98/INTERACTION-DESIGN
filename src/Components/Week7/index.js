import React, { useState,Component } from "react";
import styled from "styled-components";
import DatePicker from 'react-date-picker';
import wEWantYou from "../../Assets/WeWantYou.png";
import logo from "../../Assets/imperial_logo.png";
import BackMenu from "../../Assets/home.svg";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Not a valid email"),
  password: yup.string().required("Password is required"),
  name:yup.string().required("Name is required"),
});

const StyledDivRow = styled.div`
flex:50%;
padding:10px;
height:300px;

`;

const StyledWrapper = styled.div`
width: 100vw;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;


`;


const StyledHeader = styled.h1`
  color: #ff3333;
`;

const StyledInput = styled.input`
  background: #ffffff;
  border: 1px solid #c7c7c7;
  height: 63px;
  width: 337px;
  padding-left: 10px;
  font-size: 18px;
`;

const StyledIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: -80px;
  margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
  color: red;
`;

const StyledButton = styled.button`
  height: 63px;
  width: 350px;
  background: #FF3333;
  color: #ffff;
  text-align: center;
  font-size: 18px;
  border: 0;
  cursor: pointer;
  &:hover {
    background: #A32121;
  }
`;

const StyledImage = styled.img`
;


`;

const Week7 = () => {

  
  const [value, onChange] = useState(new Date());
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    setSubmitted(true);
    console.log(data);
  }

  const handleClick = (e) => {
    setShowPassword(!showPassword);
  };

  return (
      <div>
          <a href="/INTERACTION-DESIGN/" style={{textDecoration:"none",color:"black"}}>
                <img src={BackMenu} className="go-back" alt="go back" style={{width:"2%",margin:"1%"}}/>
            </a>

      <StyledWrapper>


      {submitted &&
            
          <div>
            <img src={logo} style={{display: "block",marginLeft: "auto",marginRight: "auto",width: "30%"}}/>
            <p/>
            <h2 style={{textAlign:"center"}}>You made the right choice!</h2>
          
          <p>  An email has been sent with the detailed information. Please Read Carefully!</p>
          </div>

      }

      
     

      {!submitted && (
      
        <StyledWrapper>
           <StyledDivRow>

          <img src={wEWantYou} style={{float:"right",display: "block",marginLeft: "auto",marginRight: "auto",width: "40%"}} />

          </StyledDivRow>


      <StyledDivRow>

      <StyledHeader> We want you!</StyledHeader>

      <h3>We believe that you have the qualities to be an imperial</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
      <p>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            ref={register()}
          />
        </p>
        <StyledErrorText> {errors.name?.message}</StyledErrorText>
        <p>
          <StyledInput
            type="text"
            name="email"
            placeholder="Email"
            ref={register()}
          />
        </p>
        <StyledErrorText> {errors.email?.message}</StyledErrorText>
        <p>
          <StyledInput
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            ref={register()}
          />
          <StyledErrorText> {errors.password?.message}</StyledErrorText>
        </p>
        <p>
          <StyledButton> Register </StyledButton>
        </p>
      </form>
      </StyledDivRow>
      </StyledWrapper>

      )}

      </StyledWrapper>
      </div>

      );
};

export default Week7;

