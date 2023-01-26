import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <MainContainer>
      <FirstContainer>Sign Up1</FirstContainer>
      <SecondContainer>
        <FirstParagraph>
          Already a member?{' '}
          <span>
            <Link to="/login">Login</Link>
          </span>
        </FirstParagraph>
        <Header2>Create Account</Header2>
        <FormInput>
          <FirstNameInput type="text" placeholder="First Name(*)" />
          <LastNameInput type="text" placeholder="Last Name(*)" />
          <EmailInput type="email" placeholder="Email Address(*)" />
          <ConfirmEmailInput
            type="email"
            placeholder=" Confirm Email Address(*)"
          />
          <DateOfBirth
            type="text"
            placeholder="DD/MM/YYYY - Date Of Birth(*)"
          />
          <PhoneNumber type="text" placeholder="Phone Number(*)" />
          <SelectCountry>
            <option value="volvo">-Select Country-</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </SelectCountry>
          <SelectAccount>
            <option value="volvo">-Select Account Type-</option>
            <option value="Forex Trading">Forex Trading</option>
            <option value="Bitcoin Investment">Bitcoin Investment</option>
          </SelectAccount>
          <SelectPackage>
            <option>-Select Package Plan-</option>
            <option value="Forex Trading">BEGINNER($3000-$4999)</option>
            <option value="Bitcoin Investment">ADVANCED($5000-$9999)</option>
            <option value="Bitcoin Investment">EMERALD($10000-$19000)</option>
            <option value="Bitcoin Investment">DIAMOND($20000-$49000)</option>
            <option value="Bitcoin Investment">TRADING PRO($50000-$99000)</option>
            <option value="Bitcoin Investment">BUSINESS PRO($100000 & ABOVE)</option>
          </SelectPackage>
          <Password type="password" placeholder="Input Password(*)" />
          <ConfirmPassword type="password" placeholder="Confirm Password(*)" />

          <CheckBoxContainer>
          <CheckBox type="checkbox" />
          <p>I Agree the terms and conditions(*)</p>
          </CheckBoxContainer>
          <Instruction>
        (All fields with (*) are required. Check to ensure all fields are filled properly before Submitting your form.)
        </Instruction>
        <ButtonContainer>
        <button type='submit'> Sign Up</button>
        </ButtonContainer>
        </FormInput>

      </SecondContainer>
    </MainContainer>
  )
}

export default SignUp

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
`

const FirstContainer = styled.div`
  background: gray;
  width: 44%;
`

const SecondContainer = styled.div`
  width: 56%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FirstParagraph = styled.p`
  margin: 5% 0 1% 0;
  text-align: end;
  margin-right: 9%;
  span {
    font-weight: 600;
    a {
      text-decoration: none;
      color: #1e90ff;
    }
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
`

const ConfirmEmailInput = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
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
`

const PhoneNumber = styled.input`
  width: 57%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
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
`
const SelectAccount = styled.select`
  width: 60%;
  height: 7vh;
  border: 0;
  border-radius: 5px;
  background: #f9f9fb;
  outline: none;
  padding-left: 3%;
  margin-bottom: 2%;
  color: gray;
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
  p{
    color: gray;
  }
`

const Instruction = styled.p`
  font-size: 15px;
  margin: 0% 20%;
  color: gray;
`

const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  gap: 5%;
  button{
    height: 7vh;
  width: 25%;
  margin: 5% 0%;
  background: #1E90FF;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 9px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 1px 1px 9px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 9px -3px rgba(0,0,0,0.75);
  }
  }
`


// const Button = styled.button`
//   height: 7vh;
//   width: 15%;
//   margin: 5% 0%;
//   background: #1E90FF;
//   border: none;
//   border-radius: 5px;
//   color: #fff;
//   cursor: pointer;

//   &:hover {
//     box-shadow: 1px 1px 9px -3px rgba(0,0,0,0.75);
// -webkit-box-shadow: 1px 1px 9px -3px rgba(0,0,0,0.75);
// -moz-box-shadow: 1px 1px 9px -3px rgba(0,0,0,0.75);
//   }
// `