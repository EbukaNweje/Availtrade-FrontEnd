import React from "react";
import "./Contact.css";
import "../Steps/GetStarted.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import Footer from "../LandingPage/Footer/Footer"


const Contact = () => {
  return (
    <div>
      <section className="contact">
        <h5>24/7 support one touch away</h5>
        <h1 className="contact_h1 faq_h1">Contact Us</h1>
        <hr className="open_acct_hr" />
      </section>

      <div className="flex-cont">
       {/*  <section className="map">Map</section> */}

        <section className="support_form">
          <h4>Support Form</h4>
          <p className="support_form_parag">
            <IoLocationOutline />
            &nbsp;&nbsp; Address: 813 Meadowbrook Drive Coppell,TX 75019
            <br />
            <BsEnvelope />
            &nbsp;&nbsp; preeminentteam@gmail.com
            <br />
            <BsHeadset />
            &nbsp;&nbsp; Phone: +1 (847) 616-147
          </p>
          <hr />

          <h4>Support Form</h4>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Username or Full name"
              />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
              />
              <textarea
                className="form-control textarea"
                id="message"
                rows="3"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <input type="submit" value="Send message" class="sbmt" />
          </form>
          <div></div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
