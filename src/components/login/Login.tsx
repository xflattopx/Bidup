import React, { useState } from 'react';
import {
  Form, InputTextField, LoginButton, ErrorMessage, SignupParagraph,
  WelcomeBack,
  WelcomeBackWrapper,
  EnterYourCredentials,
  NameWrapper,
  FrameChild,
  FrameGroup,
  NameFrame,
  FrameWrapper,
  FrameContainer,
  FrameDiv,
  RememberFor30,
  RectangleParent,
  InstanceParent,
  ForgotPassword,
  FrameParent,
  FrameInner,
  Frame,
  Biduplogo3Icon,
  EmpowerYourselfWith,
  Frame1,
  LogInRoot,
  InputCheckBox,
  LoginText,
} from './styles';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../loading_spinner/LoadingSpinner';

interface LoginProps {
  onLogin: (credentials: { email: string; password: string }) => Promise<{ token: string; role: string }>;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();

  const apiUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4200'
    : 'https://bidup-api-3gltjz2saq-ue.a.run.app';


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(`${apiUrl}/user/sign-in`, loginData);

      if (response.status === 200) {
        const { token, role, first_name, last_name, email, user_id } = response.data;



        localStorage.setItem('jwtToken', token);
        setLoggedIn(true);

        setLoginData({ email: '', password: '' });

        if (role === 'Customer') {
          dispatch({
            type: 'INSERT_USER_INFO',
            payload: {
              firstName: last_name,
              lastName: first_name,
              email: email,
              role: role
            }
          });
          dispatch({
            type: 'UPDATE_USER_ID',
            payload: {
              userId: user_id
            }
          });

          setTimeout(() => {
            navigate('/profile');
          }, 3000);
        } else if (role === 'Driver') {
          dispatch({
            type: 'INSERT_USER_INFO',
            payload: {
              firstName: last_name,
              lastName: first_name,
              email: email,
              role: role
            }
          });
          dispatch({
            type: 'UPDATE_USER_ID',
            payload: {
              userId: user_id
            }
          });

          setTimeout(() => {
            navigate('/dashboard');
          }, 3000);
        } else {
          console.error('Unknown user role:', role);
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loggedIn === false ? (
        <LogInRoot>
          <Frame>
          <form onSubmit={handleSubmit}>
            <FrameInner>
              <FrameParent>
                <WelcomeBackWrapper>
                  <WelcomeBack>Welcome back!</WelcomeBack>
                </WelcomeBackWrapper>
                <EnterYourCredentials>
                  Enter your Credentials to access your account
                </EnterYourCredentials>
                <FrameGroup>
                  <NameWrapper>
                    <WelcomeBack>Name</WelcomeBack>
                  </NameWrapper>
                  <FrameChild />
                </FrameGroup>
                <FrameContainer>
                  <NameWrapper>
                    <WelcomeBack>Email address</WelcomeBack>
                  </NameWrapper>
                  <FrameWrapper>
                    <NameFrame>
                      <InputTextField
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        value={loginData.email}
                        onChange={handleInputChange}
                        required>
                      </InputTextField>
                    </NameFrame>
                  </FrameWrapper>
                </FrameContainer>
                <FrameDiv>
                  <NameWrapper>
                    <WelcomeBack>Password</WelcomeBack>
                    <ForgotPassword>forgot password</ForgotPassword>
                  </NameWrapper>
                  <FrameWrapper>
                    <NameFrame>
                      <InputTextField
                        type="password"
                        name="password"
                        placeholder="Name"
                        value={loginData.password}
                        onChange={handleInputChange}
                        required
                      />
                    </NameFrame>
                  </FrameWrapper>
                </FrameDiv>
                <RectangleParent>
                  <RememberFor30>
                    <InputCheckBox type="checkbox"></InputCheckBox>
                    Remember for 30 days</RememberFor30>
                </RectangleParent>
                <InstanceParent>
                  <LoginButton type="submit" disabled={loading}>
                    {loading ? <LoginText>Logging in...</LoginText> : <LoginText>Login</LoginText>}
                  </LoginButton>
                  {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
                  <SignupParagraph>
                    Don't have an account? <Link to="/register">Sign up</Link>
                  </SignupParagraph>
                </InstanceParent>
              </FrameParent>
            </FrameInner>
            </form>
          </Frame>
          <Frame1>
            <Biduplogo3Icon alt="" src="/BidUpLogo.svg" />
            <EmpowerYourselfWith>
              Empower yourself with BidUp! Take control of your service costs like
              never before. Say goodbye to fixed algorithms dictating prices. With
              BidUp, you set the price, and drivers bid down to win your task. Your
              requests, your prices, your rules. BidUp puts the power back in your
              hands.
            </EmpowerYourselfWith>
          </Frame1>
        </LogInRoot>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
};

export default Login;


/*Graveyard

 <Form onSubmit={handleSubmit} className="login-form">
            <Label>
              Email:
              <Input
                type="text"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
                required
              />
            </Label>

            <Label>
              Password:
              <Input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                required
              />
            </Label>

            <Button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
          </Form>

          <SignupParagraph>
            Don't have an account? <Link to="/register">Sign up</Link>
          </SignupParagraph>

          */