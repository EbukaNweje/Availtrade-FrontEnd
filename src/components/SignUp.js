
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link } from 'react-router-dom'
import bg from '../asset/bitcoinwallpaper.jpg'
import logo from '../asset/preeminentcryptotrade.png'
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import { SpinnerCircular } from 'spinners-react';
import Swal from 'sweetalert2'

function SignUp({Display}) {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [referenceid, setReferenceId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [gender, setGender] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [loading, setLoading] = useState(false)

  console.log(message)
 /*  const [old, setOld] = useState(false)
  const [conditions, setconditions] = useState(false) */

   useEffect(()=>{
    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])

    const Data = {firstName,lastName,referenceid,password,confirmPassword,gender,phoneNumber,email}
    const url = "https://preeminentcryptotrade.onrender.com/api/register"
    
    const Siginup = (e) => {
    setLoading(true)
      e.preventDefault()
      Axios.post(url,Data)
      .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data));
        console.log(res)
      }
      )
      .then((res)=>{
        setMessage({ error: true, msg: res.response.data.message });
        const id =JSON.parse(localStorage.getItem("User") )
        setTimeout(() => {
          navigate(`/dashboard/${id.data._id}`) 
        }, [2000]);
      })
      .catch((error)=>{
        setMessage({error: false, msg:error.response.data.message });
      console.log(error)
      setLoading(false)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message,
     }) 
      //  reset(),
    })
    }


   useEffect(()=>{

    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])


  return (
    <MainContainer>
      <FirstContainer>
          <LogoDiv>
            <Link to="/">
              <LogoImg src={logo} alt="Logo"/>
            </Link>
          </LogoDiv>
          <Welcome>
              <WelText>Welcome to <span>Preeminentcryptotrade</span> </WelText>
              <Parg>Our goal here is to provide investors with a platform that is trustworthy, 
                reliable and efficient.</Parg>
            </Welcome>
            <FirstFooter>
              <FirstFooterText1>© 2020 preeminentcryptotrade.com ! </FirstFooterText1>
              <FirstFooterText2>
                {/* <span>Terms & Conditions</span> */}
                <span><Link to="/contact" style={{color: "gray"}}>Contact</Link></span>
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
        <FormInput onSubmit={(e)=> Siginup(e)}>
          <FirstNameInput type="text"  placeholder="Reference ID(Optional)(*)" value={referenceid} onChange ={(e)=>{setReferenceId(e.target.value)}}/>
          <FirstNameInput type="text" required placeholder="First Name(*)" value={firstName} onChange ={(e)=>{setFirstName(e.target.value)}}/>
          <LastNameInput type="text" required placeholder="Last Name(*)" value={lastName} onChange ={(e)=>{setLastName(e.target.value)}}/>
          <EmailInput type="email" required placeholder="Email Address(*)" value={email} onChange ={(e)=>{setEmail(e.target.value)}}/>
          {/* <ConfirmEmailInput
            type="email"
            placeholder=" Confirm Email Address(*)"
          />
          <DateOfBirth
            type="text"
            placeholder="DD/MM/YYYY - Date Of Birth(*)"
          /> */}
          <PhoneNumber type="text" required placeholder="Phone Number(*)" value={phoneNumber} onChange ={(e)=>{setPhoneNumber(e.target.value)}}  />
          <SelectCountry value={gender} required onChange ={(e)=>{setGender(e.target.value)}} >
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
          <Password type="password" required placeholder="Input Password(*)" value={password} onChange ={(e)=>{setPassword(e.target.value)}}/>
          <ConfirmPassword type="password"required placeholder="Confirm Password(*)"  value={confirmPassword} onChange ={(e)=>{setconfirmPassword(e.target.value)}}/>
      {/*     <Messg>{message.msg}</Messg> */}
          <CheckBoxContainer>
            <CheckBox type="checkbox" required />
            <p>I am 18 years of age or older(*)</p>
          </CheckBoxContainer>
          <CheckBoxContainer>
            <CheckBox type="checkbox" required />
            <p>I Agree to the terms and conditions(*)</p>
          </CheckBoxContainer>
          <Instruction>
            (All fields with (*) are required. Kindly Check to ensure all fields are
            filled properly before Submitting your form.)
          </Instruction>
          <ButtonContainer>
            <button type="submit">  {loading ? <SpinnerCircular size={25} thickness={100} speed={100} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" /> : "Sign Up "} </button>
          </ButtonContainer>
        </FormInput>
      </SecondContainer>
    </MainContainer>
  )
}

export default SignUp
/* const Messg = styled.div`
  width: 56%;
  margin-bottom: 10px;
  font-size: 13px;
  color: red;

  @media (max-width: 768px) {
      width: 87%
    }
` */

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
