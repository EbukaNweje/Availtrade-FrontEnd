import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bg from '../asset/bitcoinwallpaper.jpg'
import logo from '../asset/preeminentcryptotrade.png'

const Login = () => {
  return (
    <MainContainer>
         <FirstContainer>
          <LogoDiv>
            <LogoImg src={logo} alt="Logo"/>
          </LogoDiv>
          <Welcome>
              <WelText>Welcome to <span>Preeminentcryptotrade</span> </WelText>
              <Parg>Our goal here is to provide investors with a platform that is trustworthy, 
                reliable and efficient.</Parg>
            </Welcome>
            <FirstFooter>
              <FirstFooterText1>© 2020 preeminentcryptotrade.com ! </FirstFooterText1>
              <FirstFooterText2>
                <span>Terms & Conditions</span>
                <span>Contact</span>
              </FirstFooterText2>
            </FirstFooter>
      </FirstContainer>
      <SecondContainer>
        <FirstParagraph>
          Don't have an account?
          <span>
            <Link to="/">SignUp</Link>
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
            <button type="submit"> Log In </button>
            <Link to="">Forgot password?</Link>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default Login
const FirstFooterText2 = styled.div`
  display: flex;
  margin-right: auto;

  span{
    color: gray;
    font-size: 15px;
    font-weight: 600;
    margin: 0px 20px;
    cursor: pointer;
    transition: all 350ms;

    @media (max-width: 768px) {
    height: max-content;
    font-size: 10px;
    width: 100px;
    margin: 2px 0px;

    }
  }

  span:hover{
    color: lightgray;
    text-decoration: underline
  }

  @media (max-width: 768px) {
  flex-direction: column;
  margin: 0px 5px;
}
`
const FirstFooterText1 = styled.div`
  color: lightgray;
  font-size: 15px;

  @media (max-width: 768px) {
  height: max-content;
  font-size: 10px;
  width: 130px;
}
`
const FirstFooter = styled.div`
  margin-left: 5%;
  margin-bottom: 5%;
  display: flex;
  width: 90%;
  justify-content: space-between;
`
const Parg = styled.p`
  width:  85%;
  margin-top: 20px;
  color: lightgray;

  @media (max-width: 768px) {
    font-size: 15px;
    }
`
const WelText = styled.div`
  width: 80%;
  color: white;
  font-size: 25px;
  font-weight: 600;
  text-shadow: -2px 1px 15px rgba(0,0,0,0.74);

  span{
    color: yellow;
    text-shadow: -2px 1px 15px rgba(0,0,0,0.74);
  }
`
const Welcome = styled.div`
  margin-left: 5%;
  height: max-content
`
const LogoImg = styled.img`
  width: 100%;
`
const LogoDiv = styled.div`
  width: 70%;
  height: max-content;
  margin-top: 5%;
  margin-left: 5%;
`

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

    @media (max-width: 768px) {
    flex-direction: column;
  }

`

const FirstContainer = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  width: 44%;
  height: 100vh;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
  height: 70vh;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
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
    margin-left: 10px;

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