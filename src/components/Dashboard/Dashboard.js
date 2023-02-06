import React from 'react'
import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import AccountDetail from './AccountDetail'

const Dashboard = () => {
   
  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <AccountDetail />
    </div>
  )
}

export default Dashboard