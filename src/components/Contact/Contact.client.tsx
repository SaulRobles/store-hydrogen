import React from "react";

export default function Form() {

  return (
    <form action="" className="Contact_Form_Main">
      <div className="Contact_Form_Input_TextArea">
        <div className="Contact_Form_Input_Div">
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input type="text" name="" id="" />
        </div>
        <div className="Contact_Form_TextArea_Div">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <div className="Contact_Form_Buttons_Div">
        <button>SEND EMAIL</button>
        <button>SEND WHATSAPP</button>
      </div>
    </form>
  )
}