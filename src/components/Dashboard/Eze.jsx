import React from 'react'
import './eze.css'
import image from '../../asset/image.jpeg'
import { ImBriefcase } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { MdLocationOn } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export default function Eze() {

  return (
    <div className='footer'>
      <div className='footer_image'>
        <img src={image} alt="img" />
      </div>
      <div className='footer_cont'>
        <div className='footet_wrap'>
          <div className='footerNav_contain'>
            <div className='button'>
              <button className='button1'>Privacy Policy</button>
              <button className='button2'>Anti-Spam Policy</button>
              <button className='button3'>Rules</button>
              <p>@2020 Pipscounttfx.com All Rights Reserved.</p>
            </div>
            <div className='footer_nav'>
              <p>ABOUT COMPANY</p>
              <p>OUR NEWS</p>
              <p>GET STARTED</p>
              <p>AFFILIATES</p>
              <p>FAQ</p>
              <p>HOWTO</p>
              <p>CONTACT US</p>
            </div>
          </div>
          <div className='footer_buttom'>
            <div className='footer_icons'><ImBriefcase className='icon' /> <p>Pipscounttfx</p></div>
            <div className='footer_icons'><MdLocationOn className='icon' /> <p>Adress:813Meadowbrook Drive Coppell,TX 75019</p></div>
            <div className='footer_icons'><ImPhone className='icon' /> <p>Phone:VIP members only</p></div>
            <div className='footer_icons'> <TfiEmail className='icon' /><p>Email:Pipscounttfx.com</p></div>
          </div>
        </div>

      </div>
    </div>
  )
}