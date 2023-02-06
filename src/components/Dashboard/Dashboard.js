import React from 'react'
import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import AccountDetail from './AccountDetail'
import Eze from './Eze'

const Dashboard = () => {
   
  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <AccountDetail />
        <Eze />
    </div>
  )
}

export default Dashboard