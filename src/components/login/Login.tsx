import React, { useState } from 'react';
import { Container, LoginFormContainer, Form, Label, Input, Button, ErrorMessage, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

interface LoginProps {
  // Update the type of onLogin function if needed
  onLogin: (credentials: { email: string; password: string }) => Promise<{ token: string; role: string }>;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      // Set loading to true when starting the login process
      setLoading(true);

      // Call the onLogin function and get the token and role using Axios
      const response = await axios.post('http://localhost:4200/auth/get-user', loginData);
      console.log(response);

      // If the login was successful and a token and role were returned
      if (response.status === 200) {
        const { token, role, first_name, last_name, email, user_id } = response.data;
        console.log(token, role, first_name, last_name, email, user_id)
        // Store the token in local storage
        localStorage.setItem('jwtToken', token);

        // Reset the form after successful submission
        setLoginData({ email: '', password: '' });

        // Conditionally navigate based on the user's role
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
            })
          navigate('/profile');
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
          })
          navigate('/dashboard');
        } else {
          // Handle unknown roles or other cases
          console.error('Unknown user role:', role);
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle the error, show error message, etc.
    } finally {
      // Set loading back to false when the login process is complete (whether successful or not)
      setLoading(false);
    }
  };

  return (
    <Container>
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
        </Form>
      </LoginFormContainer>
    </Container>
  );
};

export default Login;
