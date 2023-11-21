// Login.tsx

import React, { useState } from 'react';
import { Container, LoginFormContainer, Form, Label, Input, Button, ErrorMessage, Title } from './styles';

interface LoginProps {
  onLogin: (credentials: { username: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginData);
    // Reset the form after submission if needed
    setLoginData({ username: '', password: '' });
  };

  return (
    <Container>
      <LoginFormContainer>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit} className="login-form">
          <Label>
            Username:
            <Input
              type="text"
              name="username"
              value={loginData.username}
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

          <Button type="submit">Login</Button>
        </Form>
      </LoginFormContainer>
    </Container>
  );
};

export default Login;
