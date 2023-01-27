import React from "react";
import "./GetStarted.css";
import { BsArrowRight } from "react-icons/bs";
import picture from "../assets/cb-270-512.svg";

const GetStarted = () => {
  return (
    <div className="get_started_cont">
      
      <section className="open_acct">
        <div className="acct_step">
        <div className="step">
          <span> STEP</span>
          <h1>1</h1>
        </div>

        <div className="open_acct_text">
          <div className="open_acct_h2_div">
            <h2 className="open_acct_h2">Open your account</h2>
            <hr className="open_acct_hr" />
          </div>

          <p className="paragraph">
            It’s fast, easy, and free – with no membership <br />fees whatsoever! It
            only takes a few minutes. To<br /> open your free account, go to the
            registration page and click the “Create Account” button on the
            top-right-hand side of the website. A form will pops up for you to
            enter your personal information in; as soon as you have done that,
            enter your full name, username, password, email and payment accounts
            and you’re good to go.
          </p>
          <br />
          <br />

          <div className="button-link">
            <a href="./" className="button1">
               <BsArrowRight className="arrow"/>
              CREATE ACCOUNT
            </a>
          </div>
        </div>

          
        </div>

        <div className="first-img">
            <img src={picture} alt="pics" className="book_pic" />
          </div>
      </section>
    </div>
  );
};

export default GetStarted;
