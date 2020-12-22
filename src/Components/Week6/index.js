import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import side from "../../Assets/sideimage.png"
import Icon from "../../Assets/DeathStar.png";

import {Button} from "../Week3";
import {buildQueries} from "@testing-library/react";

const SideImage =styled.img`
width:50%;
margin:0 auto;
display: block;

`;

const StyledWrapper = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  
`;

const Styledblocks =styled.div `

width: 50%;
font-size: 30px;
object-fit: cover;
margin-left: 1rem;
margin-top: 1rem;

`;

const StyledButton = styled.button `
  color: #fff;
  background-color: ${
    (props) => props.color
};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0.3);
  cursor: pointer;
  margin: 2%;
  position: absolute;

  &:hover {
    transition: 0.5s all ease-out;
  }
`;
const StyledItems = styled.h4 `
margin-left:1rem;


`;
const StyledInput = styled.input `
background: #ffffff;
margin-Left:16px;
border: 1px solid #c7c7c7;
height:58px;
width:328px;
top:16px;
font-size:16px;
font:Roboto;
text-indent: 16px;

font-color: #000000 60%;
`;

const StyledSelect = styled.select `
background: #ffffff;
margin-Left:16px;
border: 1px solid #c7c7c7;
height:58px;
width:100px;
top:16px;
font-size:16px;
font:Roboto;
font-color: #000000 60%;

  &:hover {
    transition: 0.5s all ease-out;
  }
`;

const StyledMenu = styled.div `
  animation: 0.5s ${
    keyframes({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })
}
    linear;
  padding:0;
  margin-top: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  & li {
    &:hover {
      background: grey;
    }
    cursor: pointer;

    text-align: center;
    width: 80%;
    height: 10px;
    list-style: none;
    margin-top: 1rem;
    padding: 30px;
  }
`;


const options = [
    {
        label: "1",
        value: "1"
    }, {
        label: "2",
        value: "2"
    }, {
        label: "3",
        value: "3"
    }, {
        label: "4",
        value: "4"
    },
    {
        label: "5",
        value: "5"
    },
    {
        label: "6",
        value: "6"
    },
    {
        label: "7",
        value: "7"
    },
    {
        label: "8",
        value: "8"
    },{
        label: "9",
        value: "9"
    },
];


class Week6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruit: "0"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log("Fruit Selected!!");
        this.setState({fruit: e.target.value});
    }

    render() {
        return (
            <StyledWrapper>
                <Styledblocks>
                <StyledItems >x{this.state.fruit}</StyledItems>

                <form>
                    <StyledInput type="text" name="firstname" placeholder="First Name"/>
                    <StyledInput type="text" name="lastname" placeholder="Last Name"/>
                    <p/>
                    <StyledInput type="text" name="email" placeholder="Email"/>

                </form>
                <StyledSelect value={
                        this.state.fruit
                    }
                    onChange={
                        this.handleChange
                }>
                    {
                    options.map((option) => (
                        <option value={
                            option.value
                        }>
                            {
                            option.label
                        }
                            {
                            option.img
                        }</option>
                    ))
                } </StyledSelect>

                
                </Styledblocks>

            </StyledWrapper>

        );
    }
}
export default Week6;
