import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <MainContainer>
      <FirstContainer>Log In</FirstContainer>
      <SecondContainer>
        <FirstParagraph>
          Don't have an account?{' '}
          <span>
            {/* <Link to="/">SignUp</Link> */}
          </span>
        </FirstParagraph>
        <Header2>Login Account</Header2>
        <FormInput>
          <EmailInput type="email" placeholder="Email Address" />
          <Password type="password" placeholder="Input Password" />
          <CheckBoxContainer>
            <CheckBox type="checkbox" />
            <p>Keep me Logged in</p>
          </CheckBoxContainer>
          
          <ButtonContainer>
            <button type="submit"> Log In</button>
            <Link>Forgot password?</Link>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default Login

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FirstContainer = styled.div`
  background: gray;
  width: 44%;
  @media (max-width: 768px) {
    height: 30vh;
  width: 100%;
  }
`

const SecondContainer = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    height: 70vh;
  width: 100%;
  }
`

const FirstParagraph = styled.p`
  margin: 5% 0 1% 0;
  text-align: end;
  margin-right: 9%;
  margin-bottom: 5%;
  span {
    font-weight: 600;
    a {
      text-decoration: none;
      color: #1e90ff;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 15%;

  }
`

const Header2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 10% 0;
`

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const EmailInput = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`


const Password = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const CheckBox = styled.input`
  display: flex;
  align-items: flex-start;
  margin: 0;
`

const CheckBoxContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 5%;
  p {
    color: gray;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5%;
  button {
    height: 7vh;
    width: 25%;
    margin: 5% 0%;
    background: #1e90ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    &:hover {
      box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.75);
    }
  }
  a{
    text-decoration: none;
    color: #1e90ff;
    font-weight: 800;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    width: 90%;
    button{
    width: 35%;

    }
  }
`
