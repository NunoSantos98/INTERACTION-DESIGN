import React from "react";
import ReactTimeout from 'react-timeout';
import styled from "styled-components";
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';
import BackMenu from "../../Assets/home.svg";

import pass from "../../Assets/pass.jpg"
 
const SweetAlert = withSwalInstance(swal);

function refreshPage() {
  window.location.reload(false);
}


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


const StyledButton =styled.button`
    padding: 0.5em 4rem;
    font-size: 1.5rem;
    background-color: grey;
    color: white;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0.3);
    cursor: pointer;
    margin: 3%;
    margin-left: 27%;
}

`;

const options = [
  {
    label: "--",
    value: 0,
  },
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
];
function sayHello() {
  alert("Thank you for your purchase, your card has been updated.The page will refresh");
}

function ss(){
  setTimeout(5000);
  window.location.reload();
}

const styles = styled.image`

width: 135px;
height: 135px;

`;


class Week6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Fruit Selected!!");
    this.setState({ default: e.target.value });
  }
 
  
  render() {
    return (
      <div>
      <a href="/interaction-design/" style={{textDecoration:"none",color:"black"}}>
                <img src={BackMenu} className="go-back" alt="go back" style={{width:"2%",margin:"1%"}}/>
            </a>
      <StyledWrapper>

<StyledDivRow>

<img src={pass} style={{height: 400,width: 500,color: "white",float:"right"}}/>

</StyledDivRow>

<StyledDivRow >


      <h1>Imperial Monthly Pass</h1>
      <p/>
      <p style={{width:"50%",textAlign: "justify"}}>The Imperial Monthly Pass offers total access to the death star, including Darth Vader´s room <b>(dangerous)</b> and a free meal every day.</p>
      <p>(insurance not included)</p>
        <div className="select-container" style={{fontSize:"xx-large", marginLeft:"27%"}}>
            Quantity: 
            <select value={this.state.default} onChange={this.handleChange} style={{width: "8%",fontSize: "x-large"}}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          </div> 
    
      <StyledButton  onClick={() => {
          sayHello();
          ss();
        }}>
        Buy
    </StyledButton>
    </StyledDivRow>
 
      </StyledWrapper>
      </div>

    );

  }
}

export default Week6;