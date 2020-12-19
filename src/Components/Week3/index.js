import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const StyledWrapper = styled.div`
  width: 100vw;
  margin-left: 0vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  color: #fff;
  background-color: ${(props) => props.color};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0.3);
  cursor: pointer;
  margin: 2%;

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

const CheckedBorderButton = styled.button`
  color: white;
  background-color: ${(props) => props.color};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 1px solid ${(props) => props.color};
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 2%;

  &:hover {
    fontawesomeicon-color: white;
    color: #fff;
    background-color: ${(props) => props.color};
    transition: 0.2s all ease-out;
  }

  fa&hover {
    color: white;
  }
`;

const Breaker = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 0vw;
`;

export const Button = (props) => {
  const { children, color } = props;

  return <StyledButton color={color}>{children}</StyledButton>;
};

export const BorderButton = (props) => {
  const { children, color } = props;

  return <StyledBorderButton color={color}>{children}</StyledBorderButton>;
};

const Home = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

const Week3 = () => {
  return (
    <StyledWrapper>
      <Breaker>
        <Button color="#337ab7">Button 1</Button>
        <BorderButton color="#337ab7">Button 1</BorderButton>
        <CheckedBorderButton color="#337ab7">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "white" }}
            fixedWidth
          />
        </CheckedBorderButton>
      </Breaker>

      <Breaker>
        <Button color="#5cb85c">Button 2</Button>
        <BorderButton color="#5cb85c">Button 2</BorderButton>
        <CheckedBorderButton color="#5cb85c">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "white" }}
            fixedWidth
          />
        </CheckedBorderButton>
      </Breaker>

      <Breaker>
        <Button color="#5bc0de">Button 3</Button>
        <BorderButton color="#5bc0de">Button 3</BorderButton>
        <CheckedBorderButton color="#5bc0de">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "white" }}
            fixedWidth
          />
        </CheckedBorderButton>
      </Breaker>
    </StyledWrapper>
  );
};

export default Week3;
