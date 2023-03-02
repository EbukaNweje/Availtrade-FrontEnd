import React from "react"
import { useLocation } from 'react-router-dom'
import TopHeader from './TopHeader'
import BitconScr from './BitconScr'
import HeaderMenu from "./HeaderMenu"
import EditForm from "./EditForm"
import Eze from './Eze'


function EditProfile() {

    const location = useLocation();
    const { edit } = location.state || {};
    console.log(edit)

  return (
    <div>
        <TopHeader/>
        <BitconScr/>
        <HeaderMenu/>
        <BitconScr/>
        <EditForm />
        <Eze />
    </div>
  )
}

export default EditProfile
