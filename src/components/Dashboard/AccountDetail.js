import styled from 'styled-components'
import Owner from '../../asset/pipOwner.png'
import phone from '../../asset/pipPhone.png'
import Email from '../../asset/pipEmail.png'
import Country from '../../asset/pipCountry.png'
import Bag from '../../asset/pipBag.png'
import pipMoney from '../../asset/pipMoney.png'
import EarnedMoney from '../../asset/Earned-money.png'
import head from '../../asset/head.png'

function AccountDetail() {
  return (
    <AccountContainer>
      <p>Welcome: Name of person</p>
      <AccountInfo>
        <AccountType>
          <img src={Owner} alt="img" />
          <div>
            <h3>ACCOUNT</h3>
            <p>BITCOIN INVESTMENT</p>
          </div>
        </AccountType>
        <AccountEmail>
          <img src={Email} alt="img" />
          <div>
            <h3>EMAIL</h3>
            <p>someonesemail@email.com</p>
          </div>
        </AccountEmail>
        <AccountCountry>
          <img src={Country} alt="img" />
          <div>
            <h3>COUNTRY</h3>
            <p>mozambique</p>
          </div>
        </AccountCountry>
        <AccountPhone>
          <img src={phone} alt="img" />
          <div>
            <h3>PHONE:</h3>
            <p>+123456789</p>
          </div>
        </AccountPhone>
      </AccountInfo>
      <MoneyInfo>
        <AccountBalance>
          <img src={Bag} alt="bag" />
          <p>$100.00</p>
          <big>ACCOUNT BALANCE</big>
        </AccountBalance>
        <TotalEarned>
          <img src={pipMoney} alt="bag" />
          <p>$100.00</p>
          <big>TOTAL EARNED</big>
        </TotalEarned>
        <StartUp>
          <img src={EarnedMoney} alt="bag" />
          <p>$100.00</p>
          <big>START-UP DEPOSIT</big>
        </StartUp>
      </MoneyInfo>

      <UpgradeAccount>
        <UserPackage>
          <img src={head} alt="imag" />
          <small>EMERALD($1,000,000-$1,900,000)</small>
          <div>
            <p>USER PACKAGE PLAN</p>
          </div>
          <button>UPGRADE ACCOUNT</button>
        </UserPackage>
        <LastDeposit>
        <img src={head} alt="imag" />
          <small>0.00</small>
          <div>
            <p>LAST DEPOSIT</p>
          </div>
          <button>LAST DEPOSIT</button>
        </LastDeposit>
        <Withdraw>
        <img src={head} alt="imag" />
          <small>0.00</small>
          <div>
            <p>TOTAL WIDRAWN</p>
          </div>
          <button>MAKE WITHDRAWAL</button>
        </Withdraw>
        <NewDeposit>
        <img src={head} alt="imag" />
          <small>0.00</small>
          <div>
            <p>TOTAL DEPOSIT</p>
          </div>
          <button>MAKE NEW DEPOSIT</button>
        </NewDeposit>
      </UpgradeAccount>
    </AccountContainer>
  )
}

export default AccountDetail

const AccountContainer = styled.div`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
  /* background: #000; */
  margin: 4% 6% 0 6%;

  p {
    font-size: 25px;
    font-weight: 500;
    margin: 0 0 2% 0;
  }

  @media (max-width: 768px) {
  }
`

const AccountInfo = styled.section`
  display: flex;

  height: 15vh;
  gap: 0.1%;
`

const AccountType = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 4%;
  div {
    h3 {
      margin: 0;
      font-size: 28px;
      color: #fff;
      margin-bottom: 3%;
    }
    p {
      font-size: 17px;
      color: #fff;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
`

const AccountEmail = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 4%;
  div {
    h3 {
      margin: 0;
      font-size: 28px;
      color: #fff;
      margin-bottom: 3%;
    }
    p {
      font-size: 17px;
      color: #fff;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
`

const AccountCountry = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 4%;
  div {
    h3 {
      margin: 0;
      font-size: 28px;
      color: #fff;
      margin-bottom: 3%;
    }
    p {
      font-size: 17px;
      color: #fff;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
`

const AccountPhone = styled.div`
  width: 25%;
  background: #00add4;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  gap: 4%;
  div {
    h3 {
      margin: 0;
      font-size: 28px;
      color: #fff;
      margin-bottom: 3%;
    }
    p {
      font-size: 17px;
      color: #fff;
    }
  }
  img {
    width: 20%;
    height: 9vh;
    margin-left: 5%;
  }
`

const MoneyInfo = styled.section`
  display: flex;
  background: #529777;
  margin-top: 2%;
  gap: 2%;
`

const AccountBalance = styled.section`
  /* background: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 40vh;
  box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);

  img {
    width: 40%;
  }

  p {
    font-weight: 700;
  }
  big {
    font-size: 14px;
  }
`

const TotalEarned = styled.div`
  /* background: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 40vh;
  box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);

  img {
    width: 40%;
  }

  p {
    font-weight: 700;
  }
  big {
    font-size: 14px;
  }
`

const StartUp = styled.div`
  /* background: gray; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35%;
  height: 40vh;
  box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 4px 7px 13px 0px rgba(0, 0, 0, 0.72);

  img {
    width: 40%;
  }

  p {
    font-weight: 700;
  }
  big {
    font-size: 14px;
  }
`

const UpgradeAccount = styled.section`
  height: 40vh;
  margin-top: 4%;
  display: flex;
  gap: 2%;
  margin-bottom: 10%;
`

const UserPackage = styled.div`
  background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
    }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #2098d1;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }
`

const LastDeposit = styled.div`
 background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
    }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #2098d1;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }
`

const Withdraw = styled.div`
 background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
    }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #2098d1;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }
`

const NewDeposit = styled.div`
 background: #e7fbfb;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
    }
  img {
    width: 30%;
  }
  small {
    font-size: 17px;
    font-weight: 700;
  }
  div {
    border-top: 1px solid #afeded;
    border-bottom: 1px solid #afeded;
    margin: 4% 0;
    width: 100%;

    P {
      font-size: 15px;
      text-align: center;
      margin: 5% 0;
      color: gray;
    }
  }

  button {
    width: 70%;
    height: 6vh;
    margin-bottom: 3%;
    border: none;
    border-radius: 20px;
    background: #529777;
    cursor: pointer;
    color: #fff;
    position: relative;

    :hover {
      background: #000;
    }
  }
`
