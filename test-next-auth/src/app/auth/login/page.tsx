"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input, Button, Checkbox , InputRef} from "antd";
import styled from "styled-components";
import React, { forwardRef } from 'react';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 40px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const StyledForm = styled.form`
  margin: 32px 0;
`;

const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: 32px 0;

  &.login__form {
    margin-top: 20px;
  }
`;

const Logo = styled.img`
  width: 250px; 
  height: auto;

  @media (max-width: 768px) { 
    width: 180px;
  }

`;

const LogoM = styled.img `
  width:48px;
  height:48px;
  margin:auto;
  display:none;

  @media (min-width: 1025px) {
    display:block;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;

  label {
    margin-bottom: 5px; 
    display: block;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 10px 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  color:#2B2F38;
`;

const Subtitle = styled.p`
  margin: 10px 0 15px 0;
  color: #667085;
`;

const Label = styled.label `
 font-size:14px;
 color:#48505E;
`;

const StyledInput = styled(
  forwardRef<InputRef, React.ComponentProps<typeof Input>>((props, ref) => (
    <Input ref={ref} {...props} />
  ))
)`
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #D0D5DD;
  color: #333;

  &:autofill {
    background-color: white !important; 
    color: red;
  }

  &:focus {
    border-color: #A0AEC0; 
    box-shadow: 0 0 5px rgba(0, 142, 255, 0.5); 
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  justify-content: space-between;
  margin: 24px 0px 24px 0px;

  .ant-checkbox-wrapper {
    color: #48505E; 
  }

  a {
    color: #1366D9;
    text-decoration: none; 
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  border-radius: 4px;
  padding: 18px 10px;

  
  &:hover {
    background-color: #f0f0f0;
  }
`;


const StyledLink = styled.p`
  font-size: 14px;
  color: #667085;
  margin: 10px 0;

  a {
    color: #1366D9;
    text-decoration: none;
    cursor:pointer;
  }
`;


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = async (e:any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
    } else {
      router.push("/dashboard");
    }
  };

  const handleNavigateToRegister = () => {
    router.push("/auth/create");
  };

  return (
    <Main>
      <LogoSection>
        <Logo src="/Logo.svg" alt="Logo" /> 
      </LogoSection>
      <FormSection className="login__form">
        <LogoM src="/LogoM.svg" alt="logoM"/>
        <Title>Log in to your account</Title>
        <Subtitle>Welcome back! Please enter your details</Subtitle>
        <StyledForm onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <StyledInput
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <StyledInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre"
              required
            />
          </FormGroup>
          <CheckboxContainer>
            <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              Remember Me
            </Checkbox>
            <a href="/forgot-password">Forgot Password</a>
          </CheckboxContainer>
          <StyledButton type="primary" htmlType="submit">
            Sign in
          </StyledButton>
        </StyledForm>
        <StyledLink>
          Don't have an account? <a onClick={handleNavigateToRegister}>Sign Up</a>
        </StyledLink>
      </FormSection>
    </Main>
  );
};

export default LoginPage;