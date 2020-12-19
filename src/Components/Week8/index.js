import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import coverIMG from "../../Assets/death.jpg";
import close from "../../Assets/close.svg";


const StyledModalWrapper = styled.div `
   
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 999;
    background: rgb(169,169,169,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledModal = styled.div `
    position: fixed;
    z-index:1000    ;
    width: 50vw;
    height: 90vh;
    background-color: white; 
`;

const StyledTitle = styled.h1 `

text-align:center;
margin-top:4rem;
margin-bottom:4rem;
font-family: -webkit-pictograph;
font-size:51px;
`;

const StyledModalHeader = styled.header `
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem;
    font-size: 30px;
    cursor: pointer;
    background:black;
`;
const StyledContent = styled.p `
    width:40%;    
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size:20px;
    position: relative;
    margin:0 auto;
    text-align: justify;
    margin-top:3rem;
}
`;
const CheckedBorderButton = styled.button `
  color: white;
text-align:center;
margin-left:30%;
background-color:black;
};
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: 1px solid ${
    (props) => props.color
};
  border-radius: 0.25rem;
  cursor: pointer;
margin-bottom:2rem;
  &:hover {
    fontawesomeicon-color: white;
    color: #fff;
    background-color: ${
    (props) => props.color
};
    transition: 0.2s all ease-out;
  }

  fa&hover {
    color: white;
  }
`;

const ModalImage = styled.img `

margin-top:0;
height:55%;
width:100%;


`;
const StyledInput = styled.input `
background: #ffffff;
margin-Left:16px;
margin-bottom:2rem;

border: 1px solid #c7c7c7;
height:3rem;
width:328px;
margin-top:0.5rem;
font-size:16px;
font:Roboto;
font-color: #000000 60%;
padding-left:1rem;
`;
const ModalButton = styled.button `
color: white;
background-color:black;
padding: 0.5rem 4rem;
font-size: 1.5rem;
border: 1px solid black;
verticalAlign:"middle"
border-radius: 0.25rem;
cursor: pointer;
margin-bottom:2rem;
margin: 0 auto;
display:flex;
`;

const StyledFadeOut = styled.div `
background-image: linear-gradient(#000000 0%,rgba(0,0,0,0));
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
position:relative;
display:inline-block;
`;


const Modal = (props) => { // show={showModal} onClose={handleClose}

    const {show, onClose, children} = props;

    const blockClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <> {
            show && (
                <StyledModalWrapper onClick={onClose}>
                    <StyledModal onClick={blockClick}>
                        <StyledModalHeader>
                            <img src={close}
                                style={
                                    {
                                        height: 20,
                                        width: 20,
                                        color: "white"
                                    }
                                }
                                onClick={onClose}></img>
                        </StyledModalHeader>
                        {children} </StyledModal>
                </StyledModalWrapper>
            )
        } </>
    )
}
const Week8 = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleClick = () => setShowModal(true);

    return <>
        <Modal show={showModal}
            onClose={handleClose}>


            <ModalImage src={coverIMG}></ModalImage>
            <h2 style={
                {
                    fontFamily: "sans-serif",
                    marginLeft: "1rem"
                }
            }>Please enter your email below to read the full article</h2>

            <span style={
                {
                    fontSize: "20px",
                    marginLeft: "1rem"
                }
            }>Email:</span>

            <StyledInput type="text" name="Email"/>

            <ModalButton onClick={handleClose}>
                Continue
            </ModalButton>
        </Modal>

        <StyledTitle>Why we should actually build the Death Star</StyledTitle>

        <img src={coverIMG}
            style={
                {
                    marginLeft: "10%",
                    width: "80vw",
                    height: "37.5rem"
                }
        }></img>
        <StyledContent>
            <p>
                In January, the White House responded to a not-entirely-serious petition to build a Death Star,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                a huge moon-sized battle station armed with planet-destroying laser cannons depicted in the original Star Wars trilogy. 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                More than 34,000 people had signed the petition, claiming that the project would spur job creation and strengthen defense.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                They wanted the government to begin construction by 2016. The Obama administration jokingly responded that the cost 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                — estimated to be $850 quadrillion — was far too high, and that the Obama administration "does not support blowing up planets."
            </p>
            <StyledFadeOut>

                <p>
                    The origin of the idea appears to be a rather amusing satirical post by the Glenn Beck-endorsed finance blog Zero Hedge from January 2012.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            Zero Hedge calculated that at current steel prices, the steel alone would cost $852 quadrillion, or 13,000 times the current level of global
                </p>
            </StyledFadeOut>


            <CheckedBorderButton onClick={handleClick}>
                Continue Reading
            </CheckedBorderButton>

        </StyledContent>


    </>
}


export default Week8;
