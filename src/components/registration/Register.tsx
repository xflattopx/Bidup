import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { RootState } from '../../redux/reducers/rootReducer';
import axios from 'axios';
import LoadingSpinner from '../loading_spinner/LoadingSpinner';
import {
  Select,
  GetStartedNow,
  GetStartedNowWrapper,
  EnterYourCredentials,
  FirstNameWrapper,
  EnterYourNameWrapper,
  FrameWrapper,
  FrameGroup,
  FrameDiv,
  FrameContainer,
  FrameParent1,
  FrameParent2,
  FrameParent3,
  FrameChild,
  OrWrapper,
  LineParent,
  TermsPolicy,
  IAgreeToContainer,
  FrameItem,
  IAgreeToTheTermsPolicyParent,
  HaveAnAccount,
  SignIn,
  HaveAnAccountContainer,
  HaveAnAccountSignInWrapper,
  Name8,
  NameWrapper6,
  FrameWrapper4,
  FrameParent4,
  Login1,
  InstanceParent,
  Icons8Google1,
  Icons8Google1Parent,
  FrameWrapper5,
  Icons8AppleLogo1Parent,
  FrameWrapper6,
  FrameParent,
  SignUpInner,
  Biduplogo1Icon,
  SignUpRoot,
  FormInput,
  FrameGroupLastName,
  FrameParentSelect,
  SignUpButton,
} from "./styles";


interface RegistrationProps {
  registered: boolean;
  registrationMessage: string;
}

const Register: React.FC<RegistrationProps> = function ({
  registered, registrationMessage
}) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'Customer',
  });
  const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4200'
    : 'https://bidup-api-3gltjz2saq-ue.a.run.app';
  const dispatch = useDispatch();
  const [passwordError, setPasswordError] = useState('');
  let navigate = useNavigate();
  useEffect(() => {

    if (registered) {
      console.log('in useeffect');
      const timer = setTimeout(() => {
        navigate('/registration-complete');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [registered, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordError('');
    }
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      role: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formState.password !== formState.confirmPassword) {
      setPasswordError("Passwords don't match");
      return;
    }

    try {
      // Simulate the asynchronous registration process
      // Replace this with your actual registration logic
      setTimeout(async () => {
        // Dispatch the thunk action
        await axios.post(`${apiUrl}/user/sign-up`, {
          first_name: formState.firstName,
          last_name: formState.lastName,
          email: formState.email,
          password: formState.password,
          role: formState.role,
        });

        // Dispatch an action with the registration message to the /registration-success component
        registrationMessage = `Thank you for registering, ${formState.firstName}!`;
        registered = true;

        dispatch({
          type: 'SUCCESSFUL_REQUEST_MESSAGE',
          payload: {
            successfulRequest: registered,
            successMessage: registrationMessage,
          },
        });

        // Reset the form
        setFormState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'Customer',
        });
      }, 500); // Simulated delay

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <SignUpRoot>
      <form onSubmit={handleSubmit}>
      <SignUpInner>
        <FrameParent>
          <GetStartedNowWrapper>
            <GetStartedNow>Get Started Now</GetStartedNow>
          </GetStartedNowWrapper>
          <EnterYourCredentials>
            Enter your Credentials to access your account
          </EnterYourCredentials>
        
          <FrameGroup>
            <FirstNameWrapper>
              <GetStartedNow>First Name</GetStartedNow>
            </FirstNameWrapper>
            <FrameWrapper>
              <EnterYourNameWrapper>
                <FormInput
                  type="text"
                  name="firstName"
                  placeholder='Enter your first name'
                  value={formState.firstName}
                  onChange={handleInputChange}
                  required
                />
              </EnterYourNameWrapper>
            </FrameWrapper>
          </FrameGroup>

        

          <FrameContainer>
            <FirstNameWrapper>
              <GetStartedNow>Last Name</GetStartedNow>
            </FirstNameWrapper>
            <FrameWrapper>
              <EnterYourNameWrapper>
                <FormInput
                  type="text"
                  name="lastName"
                  placeholder='Enter your last name'
                  value={formState.lastName}
                  onChange={handleInputChange}
                  required
                />
              </EnterYourNameWrapper>
            </FrameWrapper>

          </FrameContainer>
          <FrameParent1>
            <FirstNameWrapper>
              <GetStartedNow>Email</GetStartedNow>
            </FirstNameWrapper>
            <FrameWrapper>
              <EnterYourNameWrapper>
                <FormInput
                  type="text"
                  name="email"
                  placeholder='Enter your email'
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </EnterYourNameWrapper>
            </FrameWrapper>
          </FrameParent1>
          <FrameParent2>
            <FirstNameWrapper>
              <GetStartedNow>Password</GetStartedNow>
            </FirstNameWrapper>
            <FrameDiv>
              <EnterYourNameWrapper>
                 <FormInput
                  type="password"
                  name="password"
                  placeholder='Name'
                  value={formState.password}
                  onChange={handleInputChange}
                  required
                />
              </EnterYourNameWrapper>
            </FrameDiv>
          </FrameParent2>
          <FrameParent3>
            <FirstNameWrapper>
              <GetStartedNow>Re-enter Password</GetStartedNow>
            </FirstNameWrapper>
            <FrameDiv>
              <EnterYourNameWrapper>
                <FormInput
                  type="password"
                  name="confirmPassword"
                  placeholder='Name'
                  value={formState.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </EnterYourNameWrapper>
            </FrameDiv>
          </FrameParent3>
          <FrameParentSelect>
            <FirstNameWrapper>Role:</FirstNameWrapper>
            <FrameDiv>
                <Select
                  name="role" 
                  value={formState.role} 
                  onChange={handleRoleChange}>
                  <option value="Customer">Customer</option>
                  <option value="Driver">Driver</option>
                </Select>
            </FrameDiv>
          </FrameParentSelect>
          <LineParent>
            <FrameChild />
            <OrWrapper>
              <GetStartedNow>Or</GetStartedNow>
            </OrWrapper>
          </LineParent>
          {/* <IAgreeToTheTermsPolicyParent>
            <IAgreeToContainer>
              {`I agree to the T`}
              <TermsPolicy>{`terms & policy`}</TermsPolicy>
            </IAgreeToContainer>
            <FrameItem />
          </IAgreeToTheTermsPolicyParent> */}
          <HaveAnAccountSignInWrapper>
            <HaveAnAccountContainer>
              <HaveAnAccount>{`Have an account?  `}</HaveAnAccount>
              <SignIn>Sign In</SignIn>
            </HaveAnAccountContainer>
          </HaveAnAccountSignInWrapper>
          <InstanceParent>
            <FrameParent4>
              <NameWrapper6>
                <Name8>Name</Name8>
              </NameWrapper6>
              <FrameWrapper4>
                <EnterYourNameWrapper>
                  <Name8>Name</Name8>
                </EnterYourNameWrapper>
              </FrameWrapper4>
            </FrameParent4>
            <SignUpButton>Sign Up</SignUpButton>
          </InstanceParent>
          <FrameWrapper5>
            <Icons8Google1Parent>
              <Icons8Google1 alt="" src="/icons8google-1@2x.png" />
              <GetStartedNow>Sign in with Google</GetStartedNow>
            </Icons8Google1Parent>
          </FrameWrapper5>
        </FrameParent>
      </SignUpInner>
      <Biduplogo1Icon alt="" src="/BidUpLogo.svg" />
      </form>
    </SignUpRoot>
  )


};

function mapStateToProps(state: RootState) {
  console.log(state.deliveryForm);
  return {
    registered: state.deliveryForm.successfulRequest,
    registrationMessage: state.deliveryForm.successMessage
  };
}

export default connect(mapStateToProps)(Register);

/** Graveyard
 </SignUpInner>return (
    {/* <Container>
      {registered === false ?
        <RegistrationContainer>
          <Title>Registration</Title>

          <Form onSubmit={handleSubmit}>
            <InputRow>
              <Label>
                First Name:
                <InputHalf
                  type="text"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleInputChange}
                  required
                />
              </Label>

              <Label>
                Last Name:
                <InputHalf
                  type="text"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Label>
            </InputRow>

            <InputRow>
              <Label>
                Email:
                <InputHalf
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </Label>
            </InputRow>

            <InputRow>
              <Label>
                Password:
                <InputHalf
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                  required
                />
              </Label>

              <Label>
                Re-enter Password:
                <InputHalf
                  type="password"
                  name="confirmPassword"
                  value={formState.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </Label>
            </InputRow>

            {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}

            <InputRow>
              <Label>
                Role:
                <Select name="role" value={formState.role} onChange={handleRoleChange}>
                  <option value="Customer">Customer</option>
                  <option value="Driver">Driver</option>
                </Select>
              </Label>
            </InputRow>

            <Button type="submit">Register</Button>
          </Form> */
          //}
        //{
          /* <SuccessMessage>{registrationMessage}</SuccessMessage> */ //}
// </RegistrationContainer>
//     : <LoadingSpinner />}
//   </Container>
//  );

