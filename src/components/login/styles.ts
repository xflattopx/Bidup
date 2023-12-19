// styles.ts

import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};
//
// export const Container = styled.div`
//   text-align: left;

//   padding: 20px;
//   min-height: 100vh;
//   font-family: 'Arial', sans-serif;
//   display: flex;
//   justify-content: left; /* Center items horizontally */
//   align-items: left; /* Center items vertically */
// `;

export const WelcomeBack = styled.div`
font-family: Poppins; 
  position: relative;
  font-weight: 500;
`;

export const WelcomeBackWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 32px;
`;

export const EnterYourCredentials = styled.div`
  position: absolute;
  top: 53.1px;
  left: 0px;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  width: 372px;
  height: 26.6px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameChild = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  border: 1px solid var(--muted);
  box-sizing: border-box;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const FrameGroup = styled.div`
  position: absolute;
  top: 111.7px;
  left: 0px;
  width: 404px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-smi);
`;

export const NameFrame = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const FrameWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs);
  font-size: var(--font-size-3xs);
`;

export const FrameContainer = styled.div`
  position: absolute;
  top: 139.4px;
  left: 0px;
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InputTextField = styled.input`
border-radius: 10px;
border: 1px solid #000; 
display: flex;
padding: 10px 0px 10px 10px;
justify-content: space-between;
align-items: center;
align-self: stretch; 
width: 350px; auto;
`;

export const InputCheckBox = styled.input`
width: 9px;
height: 9.956px;
flex-shrink: 0; 
border-radius: 2px;
border: 1px solid #000;
`

export const FrameDiv = styled.div`
  position: absolute;
  top: 217.9px;
  left: 0px;
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ForgotPassword = styled.div`
  color: var(--action-sec, #0C2A92);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal; 
  width: 295px;
  height: 16.594px;
  flex-shrink: 0
  top: 217.9px;
  left: 317px;
  text-align: right;
`



export const RememberFor30 = styled.div`
  position: relative;
  font-weight: 500;
  display: inline-block;
  width: 130px;
  height: 15.5px;
  flex-shrink: 0;
`;

export const RectangleParent = styled.div`
  position: absolute;
  top: 296.5px;
  left: 0px;
  width: 119px;
  height: 15.5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  font-size: 9px;
`;



export const InstanceParent = styled.div`
  position: absolute;
  top: 331.9px;
  left: 0px;
  width: 404px;
  height: 35.4px;
`;



export const FrameParent = styled.div`
  position: relative;
  width: 404px;
  height: 583px;
`;

export const FrameInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;



export const Biduplogo3Icon = styled.img`
  position: relative;
  width: 604px;
  height: 604.012px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

export const EmpowerYourselfWith = styled.div`
  align-self: stretch;
  position: relative;
  font-weight: 500;
`;

// export const Frame = styled.div`
//   width: 416px;
//   overflow: hidden;
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-end;
// `;

// export const Frame1 = styled.div`
//   width: 538px;
//   overflow: hidden;
//   flex-shrink: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: flex-start;
//   gap: 34px;
//   text-align: center;
//   font-size: 20px;
// `;

// export const LogInRoot = styled.div`
//   background-color: var(--color-white);
//   width: 1536px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: space-between;
//   padding: 176px 126px;
//   box-sizing: border-box;
//   text-align: left;
//   font-size: var(--font-size-sm);
//   color: var(--color-black);
//   font-family: var(--font-poppins);
// `;

export const LogInRoot = styled.div`
  background-color: var(--color-white);
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 176px 126px;
  box-sizing: border-box;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-family: var(--font-poppins);

  @media screen and (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Frame1 = styled.div`
  width: 538px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 34px;
  text-align: center;
  font-size: 20px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    margin-top: 20px; /* Adjust the spacing as needed */
    align-self: center;
  }

  @media screen and (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const Frame = styled.div`
  width: 416px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${breakpoints.desktop}) {
    margin-bottom: 20px; /* Adjust the spacing as needed */
  }

`;



















//*Old styling */

const flicker = keyframes`
  /* 0%, 100% {
    opacity: 0;
  }
  20%, 80% {
    opacity: 0.2;
  }
  40%, 60% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  } */
`;

const glow = keyframes`
/*  0% {
    text-shadow: 0 0 10px #ffcc00;
  }
  50% {
    -shadow: 0 0 20px #ffcc00;
  }
  100% {
    text-shadow: 0 0 10px #ffcc00;
  } */ 
`;

export const Title = styled.h2`
  /* font-size: 32px;
  margin-bottom: 20px;
  color: #ffcc00;
  animation: ${glow} 2s forwards; */
`;

export const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const LoginButton = styled.button`
display: flex;
padding: 10px 0px 10px 10px;
justify-content: space-between;
width: 367px;
align-items: center;
align-self: stretch; 
border-radius: 10px;
border: 1px solid #6BC8F1;
background: #6BC8F1;
text-align:center;
  &:hover {
    border: 1px solid #177CC2;
    background-color: #177CC2;
  } 
`;

export const LoginText = styled.text`
color: #FFF;
font-family: Poppins;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;
 `;

export const ErrorMessage = styled.p`
 /* color: red;
  margin-top: 5px; */
`;

export const SignupParagraph = styled.p`
 /* color: white;
  margin-top: 10px;

  a {
    color: #ffcc00;
    text-decoration: underline;
    margin-left: 5px;
  } */
`;

/*Graveyard

export const DontHaveAn = styled.span``;

export const SignUp = styled.span`
  color: #0f3dde;
`;

export const DontHaveAnContainer = styled.div`
  position: absolute;
  top: 559.8px;
  left: 93px;
  font-weight: 500;
  white-space: pre-wrap;
  display: inline-block;
  width: 229px;
  height: 23.2px;
`;

export const Name5 = styled.div`
  position: relative;
  font-weight: 500;
  display: none;
`;

export const NameWrapper3 = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameWrapper2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-3xs);
  background-color: var(--color-lightskyblue);
  border: 1px solid var(--color-lightskyblue);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs);
  font-size: var(--font-size-3xs);
  color: var(--muted);
`;

export const FrameParent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 404px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Login1 = styled.b`
  position: absolute;
  top: 6px;
  left: 185px;
  font-size: var(--font-size-smi);
  color: var(--color-white);
`;

export const FrameItem = styled.div`
  position: relative;
  border-radius: 2px;
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 9px;
  height: 10px;
`;
*/