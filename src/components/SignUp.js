import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bg from '../asset/bitcoinwallpaper.jpg'
import logo from '../asset/preeminentcryptotrade.png'

function SignUp() {
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
          Already a member?
          <span>
            <Link to="/login">Login</Link>
          </span>
        </FirstParagraph>
        <Header2>Create Account</Header2>
        <FormInput>
          <FirstNameInput type="text" placeholder="Reference ID(Optional)(*)" />
          <FirstNameInput type="text" placeholder="First Name(*)" />
          <LastNameInput type="text" placeholder="Last Name(*)" />
          <EmailInput type="email" placeholder="Email Address(*)" />
          {/* <ConfirmEmailInput
            type="email"
            placeholder=" Confirm Email Address(*)"
          />
          <DateOfBirth
            type="text"
            placeholder="DD/MM/YYYY - Date Of Birth(*)"
          /> */}
          <PhoneNumber type="text" placeholder="Phone Number(*)" />
          <SelectCountry>
            <option>-Gender-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </SelectCountry>
          {/* <SelectAccount>
            <option value="volvo">-Select Account Type-</option>
            <option value="Forex Trading">Forex Trading</option>
            <option value="Bitcoin Investment">Bitcoin Investment</option>
          </SelectAccount> */}
          {/* <SelectPackage>
            <option>-Select Package Plan-</option>
            <option>STARTER PLAN($3000-$10,000)</option>
            <option>SILVER PLAN($11,000-$50,000)</option>
            <option>GOLD PLAN($51000-$100,000)</option>
            <option>DIAMOND PLAN($101,000-$1,000,000)</option>
          </SelectPackage> */}
          <Password type="password" placeholder="Input Password(*)" />
          <ConfirmPassword type="password" placeholder="Confirm Password(*)" />

          <CheckBoxContainer>
            <CheckBox type="checkbox" />
            <p>I am 18 years of age or older(*)</p>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckBox type="checkbox" />
            <p>I Agree to the terms and conditions(*)</p>
          </CheckBoxContainer>
          <Instruction>
            (All fields with (*) are required. Kindly Check to ensure all fields are
            filled properly before Submitting your form.)
          </Instruction>
          <ButtonContainer>
            <button type="submit"> Sign Up</button>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default SignUp

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
    width: 100%;
  }
`

const FirstParagraph = styled.p`
  margin: 5% 0 1% 0;
  text-align: end;
  margin-right: 9%;
  span {
    font-weight: 600;
    margin-left: 10px;
    a {
      text-decoration: none;
      color: #1e90ff;
    }
  }
  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`

const Header2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10% 0;
`

const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FirstNameInput = styled.input`
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
const LastNameInput = styled.input`
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

/* const ConfirmEmailInput = styled.input`
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

const DateOfBirth = styled.input`
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
` */

const PhoneNumber = styled.input`
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

const SelectCountry = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
  }
`
/* const SelectAccount = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
  }
`

const SelectPackage = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
  }
` */

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

const ConfirmPassword = styled.input`
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
  align-items: center;
  gap: 2%;
  height: 30px;
  p {
    color: gray;
  }
  @media (max-width: 768px) {
    width: 93%;
    p {
      font-size: 14px;
    }
  }
`

const Instruction = styled.p`
  font-size: 15px;
  margin: 2% 20%;
  color: gray;
  @media (max-width: 768px) {
    width: 93%;
    font-size: 13px;
    margin-bottom: 5%;
  }
`

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
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
  @media (max-width: 768px) {
    width: 93%;
    button {
      width: 55%;
    height: 9vh;
    margin-bottom: 5%;
    }
  }
`
