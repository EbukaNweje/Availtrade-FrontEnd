import React, {useEffect} from 'react'

import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import AccountDetail from './AccountDetail'
import Eze from './Eze'

const Dashboard = ({Display}) => {
  useEffect(()=>{

    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
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