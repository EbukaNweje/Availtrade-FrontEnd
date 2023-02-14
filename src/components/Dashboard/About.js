import styled from 'styled-components'
import certificate from "../../asset/certificate.png"

function About() {
  return (
    <AboutContainer>
      <Detail>
        <h2>About The Company</h2>
        <p>
          Welcome to AvilTrade Inc. We are a main organization that emphasis on
          Forex market and Cryptographic money parts. We will probably
          accomplish the most astounding profit from the movement for the
          outside cash trade (Forex) and Digital money trade markets. On the off
          chance that you might want to enter the universe of online Forex
          exchanging and Digital currency exchanging with present day Cloud
          Mining stage then you are on your correct way. Ventures with
          Pipscountfx - Power Of Experience are moderate and safe.
        </p>{' '}
        <br />
        <p>
          Pipscountfx has been doing business since 2015 and accomplished
          brilliant outcomes. The experience and aptitudes of our brokers and
          budgetary specialists is the way to the achievement of the speculation
          finance. All through our professions, every one of us has drilled
          venture administration at the most abnormal amounts and constructed a
          strong notoriety for fabulous aptitudes and considerable experience.
          Our exceptionally energetic representatives and experienced
          specialists from the zone of back and related fields including
          exchanging, examination, showcasing, PC innovation, law and
          administration are prepared to give proficient administrations.
        </p>
      </Detail>
      <Certificate> 
        <img src={certificate} alt="certificate"/>
      </Certificate>
    </AboutContainer>
  )
}

export default About

const AboutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WhyWork = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-shadow: 4px 3px 10px -4px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: 4px 3px 10px -4px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 4px 3px 10px -4px rgba(0, 0, 0, 0.54);
  margin: 4% 0;
  p {
    text-align: center;
    font-family: Catamaran, sans-serif;
    font-size: 42px;
    font-weight: 600;
    color: rgb(19, 196, 234);
  }
  /* margin-top: 3%; */
`

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
`

const Detail = styled.div`
  width: 50%;
  h2 {
    font-size: 35px;
    text-align: center;
    color: #13c4ea;
    font-weight: 700;
  }

  p {
    text-align: justify;
    font-family: Catamaran, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(37, 77, 111);
  }
`

const Certificate = styled.div`
  display: flex;
  justify-content: center;
  /* height: 55vh; */
  margin-top: 1%;
  width: 40%;
`

const UpgradeAccount = styled.section`
  /* width: 100%; */
  height: 40vh;
  margin-top: 3%;
  display: grid;
  grid-template-columns: auto auto auto;
  /* justify-items: center;
  align-items: center; */
  /* justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center; */
  /* display: flex;
  justify-content: center; */
  /* gap: 2%; */

  p {
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 18%;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    height: 28vh;
  }
`

const UserPackage = styled.div`
  background: #e7fbfb;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 10%;
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
  /* @media only screen and (min-width: 360px) and (max-width: 768px) { */

  @media screen and (min-width: 769px) and (max-width: 1120px) {
    small {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    width: 33%;

    small {
      font-size: 6.7px;
    }
    div {
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
`

const LastDeposit = styled.div`
  background: #e7fbfb;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 10%;
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

  @media (max-width: 768px) {
    width: 32%;
    small {
      font-size: 6.7px;
    }
    div {
      margin: 5% 0;
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
`

const Withdraw = styled.div`
  background: #e7fbfb;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    border-top: 2px solid black;
  }
  img {
    width: 10%;
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
  @media (max-width: 768px) {
    width: 31%;

    small {
      font-size: 6.7px;
    }
    div {
      margin: 5% 0;
      p {
        font-size: 10px;
      }
    }
    button {
      width: 86%;
      font-size: 8px;
    }
  }
`

// const NewDeposit = styled.div`
//   background: #e7fbfb;
//   width: 25%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   :hover {
//     border-top: 2px solid black;
//   }
//   img {
//     width: 30%;
//   }
//   small {
//     font-size: 17px;
//     font-weight: 700;
//   }
//   div {
//     border-top: 1px solid #afeded;
//     border-bottom: 1px solid #afeded;
//     margin: 4% 0;
//     width: 100%;

//     P {
//       font-size: 15px;
//       text-align: center;
//       margin: 5% 0;
//       color: gray;
//     }
//   }

//   button {
//     width: 70%;
//     height: 6vh;
//     margin-bottom: 3%;
//     border: none;
//     border-radius: 20px;
//     background: #529777;
//     cursor: pointer;
//     color: #fff;
//     position: relative;

//     :hover {
//       background: #000;
//     }
//   }
//   @media (max-width: 768px) {
//     width: 30%;
//     margin-top: 3%;
//     small {
//       font-size: 6.7px;
//     }
//     div {
//       margin: 5% 0;
//       p {
//         font-size: 10px;
//       }
//     }
//     button {
//       width: 86%;
//       font-size: 8px;
//     }
//   }
// `
