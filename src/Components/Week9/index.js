import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import day from "../../Assets/day.jpg";
import night from "../../Assets/night.jpg";
import BackMenu from "../../Assets/home-color.svg";

const time = '0.25s';

const setAnimation = (from, to) => keyframes({ from: from, to: to })



const StyledWrapper = styled.div`
animation: ${time} ${({ showBackground }) => (showBackground && setAnimation({backgroundImage: 'url('+day+')',backgroundSize:"Cover",height: "100vh",transition: "0.2s all ease-out", color: '#000'}, {backgroundImage: 'url('+night+')',backgroundSize:"Cover",height: "100vh",transition: "0.2s all ease-out", color: '#000   '})) || (!showBackground && setAnimation({backgroundImage: 'url('+night+')',backgroundSize:"Cover",height: "100vh",transition: "0.2s all ease-out"}, {backgroundImage: 'url('+day+')',backgroundSize:"Cover",height: "100vh"}))} linear;
animation-fill-mode: forwards;
    display: block;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    transition: 0.25s all ease-out;
    align-items: center;
`;

const StyledButton = styled.div`
    animation: ${time} ${({ active }) => (active && setAnimation({backgroundColor: '#fafafa', color: '#333'}, {backgroundColor: '#fff', color: '#fff'})) || (!active && setAnimation({backgroundColor: '#333', color: '#fff'}, {backgroundColor: '#313130', color: '#333'}))} linear;

    border-radius: 5rem;
    border: solid 0.2rem;
    background-color: transparent;
    color: #fff;
    height: 3rem;
    width: 6rem;
    float: right;
    margin: 2rem;
`;

const StyledSwitch = styled.div`
    border-radius: 5rem;    
    animation: ${time} ${({ active }) => (active && setAnimation({marginLeft: 0}, {marginLeft: '50px'})) || (!active && setAnimation({marginLeft: '47px'}, {marginLeft: '7px'}))} linear;
    animation-fill-mode: forwards;
    border: solid 0.2rem;
    height: 2rem;
    width: 2rem;
    margin: 0.3rem;
    background: #fff;
    
     
`;





const ContentWrapper = styled.div`
    width: 80%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 2%;
    margin-left: 10%;
    animation: ${time} ${({ showBackground }) => (showBackground && setAnimation({color: '#333'}, {color: '#fff'})) || (!showBackground && setAnimation({color: '#fff'}, {color: '#333'}))} linear; 
    animation-fill-mode: forwards;
`;


const Toggle = (props) => {
    const [active, setActive] = useState(false);
    const { onActive, onNotActive } = props;

    useEffect(() => {
        if (!active) {
            onNotActive();
            return;
        }

        onActive();


    }, [active])


    const handleClick = () => setActive(!active);

    return (<StyledButton> <StyledSwitch active={active} onClick={handleClick} /> </StyledButton>)
}


const Week9 = () => {
   
    const [showBackground, setShowBackground] = useState(false);
    const handleNotActive = () => setShowBackground(false);
    const handleActive = () => setShowBackground(true);

    
    return (
    
    
    <StyledWrapper showBackground={showBackground}>
        <a href="/INTERACTION-DESIGN/" style={{textDecoration:"none",color:"black"}}>
                <img src={BackMenu} className="go-back" alt="go back" style={{width:"2%",margin:"1%"}}/>
            </a>
        <Toggle onNotActive={handleNotActive} onActive={handleActive} />


    </StyledWrapper>)
}


export default Week9;

