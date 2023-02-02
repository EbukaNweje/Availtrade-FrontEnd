import React from 'react'
import "../../index.css"
import styled from 'styled-components'
import bg from "../../asset/bg-wrp.png"


const MainContainer = styled.div`
    width: 100%;
    height: 55vh;
    background: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 768px) {
     background-size: cover;
       background-repeat: no-repeat;
       height: 45vh;
    }
`
const Wrapper = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`
const MyMenu = styled.div`
    margin: 0px 1%;
    font-size: 18px;
    font-weight: 700;
    color: white;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 350ms;

    :hover{
        color: orange;
    }

    @media (max-width: 768px) {
      font-size: 8px;
    }
`
const MyMenuButton = styled.div`
    margin: 0px 1%;
    font-size: 15px;
    font-weight: 700;
    color: darkblue;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 350ms;
    background: ${({ bg }) => (bg ? '#fff' : 'orange')};
    padding: 7px;
    width: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover{
        color: ${({ bg }) => (bg ? 'darkblue' : 'darkblue')};
        background: ${({ bg }) => (bg ? 'orange' : '#fff')};
    }

    @media (max-width: 768px) {
      font-size: 7px;
      width: 32px;
    }
`
const DashBoardText = styled.h2`
    margin-left: 5%;
    margin-top: 5%;
    font-size: 55px;
    color: white;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    
    @media (max-width: 768px) {
      font-size: 30px;
    }
`

const HeaderMenu = () => {
  return (
    <MainContainer>
        <Wrapper>
            <MyMenu>OVERVIEW</MyMenu>
            <MyMenu>ABOUT US</MyMenu>
            <MyMenu>FAQS</MyMenu>
            <MyMenu>PRIVACY POLICY</MyMenu>
            <MyMenu>EDIT PROFILE</MyMenu>
            <MyMenu>CONTACT US</MyMenu>
            <MyMenu>LOGOUT</MyMenu>
            <MyMenuButton>DEPOSIT</MyMenuButton>
            <MyMenuButton bg>WITHDRAW</MyMenuButton>
        </Wrapper>

        <DashBoardText>Dashboard</DashBoardText>
    </MainContainer>
  )
}

export default HeaderMenu