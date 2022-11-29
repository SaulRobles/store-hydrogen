import React, { useRef } from "react";

import Accordion from "../../components/Accordion/Accordion.client"

import Help_Banner from "../../assets/Help/Banner_HelpCenter_2520.webp"
import Help_Main_Img from "../../assets/Help/HelpCenter_Image.webp"

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Help({lng}) {
  const [ t, i18n ] = useTranslation();
  const [Text, setText] = React.useState({text: 0})
  const bodyRef = useRef(null);

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const text_change = (e, val) => {
    setText({...Text, text: val})
    
    let body = bodyRef.current;
    body.innerHTML = data[Text.text].html;

    let parent = e.target.parentNode

    parent.childNodes.forEach(element => {
      element.classList.remove("Help_Active_Button")
    });

    e.target.classList.add("Help_Active_Button")
  }

  const data = [
    {html: t("help.section_2.web_policy_data")},
    {html: t("help.section_2.shipping_policy_data")},
    {html: t("help.section_2.return_policy_data")},
    {html: t("help.section_2.data_policy_data")}
  ]

  return (
    <>
      {lng === 'en' ? <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_helpCenter_en.webp?v=1669071347"/> : <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_helpCenter_es.webp?v=1669071338"/> }
      <h1 className="main_title" style={{margin: "1.5rem 0"}}>{t("help.title")}</h1>
      <hr className="hr_divider"/>
      <div className="Help_Accordion_Section" style={{marginTop: "3rem"}}>
        <div className="Help_Accordion_Container">
          <h2 style={{marginBottom: "3rem"}}>{t("help.faq")}</h2>
          <Accordion lng={lng}></Accordion>
        </div>
        <img className="Help_Accordion_Image" src={Help_Main_Img} alt="" />
      </div>
      <div className="Help_Information_Container">
        <div className="Help_SideBar">
          <button className="Help_Active_Button" onClick={(e) => text_change(e, 0)}>{t("help.section_2.web_policy_button")}</button>
          <button onClick={(e) => text_change(e, 1)}>{t("help.section_2.shipping_policy_button")}</button>
          <button onClick={(e) => text_change(e, 2)}>{t("help.section_2.return_policy_button")}</button>
          <button onClick={(e) => text_change(e, 3)}>{t("help.section_2.data_policy_button")}</button>
        </div>
        <div className="Help_Body_Container">
          <span ref={bodyRef} dangerouslySetInnerHTML={{__html: data[Text.text].html}}></span>
        </div>
      </div>
    </>
  )
}