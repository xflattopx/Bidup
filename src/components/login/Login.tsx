import React, { useState } from 'react';
import { Container, LoginFormContainer, Form, Label, Input, Button, ErrorMessage, Title, SignupParagraph } from './styles';
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

      const response = await axios.post(`${apiUrl}/auth/get-user`, loginData);

      if (response.status === 200) {
        const { token, role, first_name, last_name, email, user_id } = response.data;

        

        localStorage.setItem('jwtToken', token);
        dispatch({
          type: 'STORE_JWT_TOKEN',
          payload: {
            jwtToken: localStorage.getItem('jwtToken'),
          }
        })
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
    <Container>
      {loggedIn === false ? (
        <LoginFormContainer>
          <Title>Login</Title>
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
        </LoginFormContainer>
      ) : (
        <LoadingSpinner />
      )}
    </Container>
  );
};

export default Login;
