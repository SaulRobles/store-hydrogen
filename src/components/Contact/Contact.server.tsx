import React from "react";
import Form from "./Contact.client"

export default function Contact() {
  
  return(
    <div>
      <div className="Contact_Form_Wrapper">
        <Form></Form>
      </div>

      <div className="Contact_Cards_Wrapper">
        {/* Chat */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://via.placeholder.com/100" alt="" />
          <p>CHAT</p>
          <p className="Contact_Cards_Text">
            <span>Write to us now, we can assist you instantly via</span>
            <span>chat, check our service hours.</span>
          </p>
        </div>
        {/* Email */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://via.placeholder.com/100" alt="" />
          <p>EMAIL</p>
          <span className="Contact_Cards_Text">
            <a href="">info@solbeautyandcare.com</a>
            <a href="">cambios@solbeautyandcare.com</a>
          </span>
        </div>
        {/* Service Hours */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://via.placeholder.com/100" alt="" />
          <p>SERVICE HOURS</p>
          <p className="Contact_Cards_Text">
            <span>Monday to Friday</span>
            <span>8:00am-4:00pm PST</span>
          </p>
        </div>
        {/* Telefono */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://via.placeholder.com/100" alt="" />
          <p>PHONE</p>
          <span className="Contact_Cards_Text">
            <a href="">USA Toll Free: (800) 387 6827</a>
            <a href="">Mexico: (800) 953 1336</a>
            <a href="">USA SD: +1 (619) 735 7575</a>
            <a href="">WhatsApp: +52 (664) 414 9190</a>
          </span>
        </div>
      </div>
    </div>
  )
}