import { FunctionComponent } from "react";
import styled, {keyframes} from "styled-components";

export const GetStartedNow = styled.div`
  position: relative;
  font-weight: 500;
`;

export const GetStartedNowWrapper = styled.div`
  color: #000;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EnterYourCredentials = styled.div`
display: flex;
width: 404px;
height: 58px;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
`;

export const FirstNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const EnterYourNameWrapper = styled.div`
display: flex;
width: 404px;
height: 58px;
flex-direction: column;
align-items: flex-start;
flex-shrink: 0;
`;

export const FormInput = styled.input`
border-radius: 10px;
border: 1px solid #000;
display: flex;
padding: 6px 6px 6px 6px;
justify-content: space-between;
align-items: center;
align-self: stretch; ;
`;

export const Select = styled.select`
  ${FormInput};
  /* Additional styles specific to the dropdown can be added here */
`;

export const FrameWrapper = styled.div`
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 404px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs);
  font-size: var(--font-size-3xs);
`;

export const FrameGroup = styled.div`
  position: absolute;
  top: 82px;
  left: 5px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;


export const FrameGroupLastName = styled.div`
  position: absolute;
  top: 32px;
  left: 5px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameDiv = styled.div`
  border-radius: var(--br-3xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 404px;
  height: 58px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs);
  font-size: var(--font-size-3xs);
`;

export const FrameContainer = styled.div`
  position: absolute;
  top: 155px;
  left: 5px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameParent1 = styled.div`
  position: absolute;
  top: 228px;
  left: 3px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameParent2 = styled.div`
  position: absolute;
  top: 301px;
  left: 3px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameParent3 = styled.div`
  position: absolute;
  top: 374px;
  left: 3px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameParentSelect = styled.div`
  position: absolute;
  top: 447px;
  left: 3px;
  width: 404px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;


export const FrameChild = styled.div`
  position: absolute;
  top: 8px;
  left: -1px;
  border-top: 2px solid var(--color-whitesmoke);
  box-sizing: border-box;
  width: 402px;
  height: 2px;
`;

export const OrWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 190px;
  background-color: var(--color-white);
  width: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 3px;
  box-sizing: border-box;
`;

export const LineParent = styled.div`
  position: absolute;
  top: 482.6px;
  left: 8px;
  width: 400px;
  height: 15.3px;
  display: none;
  font-size: var(--font-size-4xs);
`;

export const TermsPolicy = styled.span`
  text-decoration: underline;
`;

export const IAgreeToContainer = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 56.5px);
  font-weight: 500;
  display: inline-block;
  width: 128px;
  height: 15.3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FrameItem = styled.div`
  position: absolute;
  top: 2.2px;
  left: calc(50% - 71.5px);
  border-radius: var(--br-11xs);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 9px;
  height: 9.8px;
`;

export const IAgreeToTheTermsPolicyParent = styled.div`
  position: absolute;
  top: 530px;
  left: 0px;
  width: 143px;
  height: 15.3px;
  font-size: var(--font-size-4xs);
`;

export const HaveAnAccount = styled.span``;

export const SignIn = styled.span`
  color: var(--color-mediumblue);
`;

export const HaveAnAccountContainer = styled.div`
  position: relative;
  font-weight: 500;
  white-space: pre-wrap;
`;

export const HaveAnAccountSignInWrapper = styled.div`
  position: absolute;
  top: 615px;
  left: 118px;
  height: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Name8 = styled.div`
  position: relative;
  font-weight: 500;
  display: none;
`;

export const NameWrapper6 = styled.div`
  display: none;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FrameWrapper4 = styled.div`
  border-radius: var(--br-3xs);
  background-color: var(--color-lightskyblue-200);
  border: 1px solid var(--color-lightskyblue-200);
  box-sizing: border-box;
  width: 404px;
  height: 32px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) 0px var(--padding-3xs) var(--padding-3xs);
  font-size: var(--font-size-3xs);
  color: var(--muted);
`;

export const FrameParent4 = styled.div`
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

export const SignUpButton = styled.button`
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

export const InstanceParent = styled.div`
  position: absolute;
  top: 565px;
  left: 3px;
  background-color: var(--color-whitesmoke);
  width: 404px;
  height: 35px;
`;

export const Icons8Google1 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

export const Icons8Google1Parent = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;

export const FrameWrapper5 = styled.div`
  position: absolute;
  top: 560px;
  left: 5px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--muted);
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-xl);
  font-size: var(--font-size-xs);
`;

export const Icons8AppleLogo1Parent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FrameWrapper6 = styled.div`
  position: absolute;
  top: 558px;
  left: 218px;
  border-radius: var(--br-3xs);
  border: 1px solid var(--muted);
  box-sizing: border-box;
  width: 190px;
  overflow: hidden;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-9xs) var(--padding-xl);
  font-size: var(--font-size-xs);
`;

export const FrameParent = styled.div`
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 409px;
  height: 638px;
`;

export const SignUpInner = styled.div`
  position: absolute;
  top: 202px;
  left: 175px;
  height: 638px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 64px;
  box-sizing: border-box;
`;

export const Biduplogo1Icon = styled.img`
  position: absolute;
  top: 187px;
  left: 768px;
  width: 604px;
  height: 604px;
  overflow: hidden;
  object-fit: cover;
`;

export const SignUpRoot = styled.div`
  background: #FFF;
  width: 1536px;
  height: 1042px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-black);
  font-family: var(--font-poppins);
`;


export const Container = styled.div`
  text-align: center;
  background-color: #333;
  padding: 20px;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
`;

export const RegistrationContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const glow = keyframes`
  0% {
    text-shadow: 0 0 10px #ffcc00;
  }
  50% {
    text-shadow: 0 0 20px #ffcc00;
  }
  100% {
    text-shadow: 0 0 10px #ffcc00;
  }
`;

export const Title = styled.h2`
font-size: 32px;
margin-bottom: 20px;
color: #ffcc00;
animation: ${glow} 2s forwards 
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #333;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  width: 80%;
  border: none; /* Set border to none to make it invisible */
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #1a1a1a;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
  &:hover {
    background-color: #333;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;

export const SignupParagraph = styled.p`
  color: white;
  margin-top: 10px;

  a {
    color: #ffcc00;
    text-decoration: underline;
    margin-left: 5px;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-top: 5px;
`;

