import React from "react";
import { Layout } from "../../components/Global/Layout.server"
import Accordion from "../../components/Accordion/Accordion.client"
import Help from "../../components/Help/Help.client"

import Help_Banner from "../../assets/Help/Banner_HelpCenter_2520.webp"
import Help_Main_Img from "../../assets/Help/HelpCenter_Image.webp"

export default function Boutiques() {


  return (
    <Layout>
      <img src={Help_Banner} alt="" />
      <h1 className="main_title" style={{margin: "1.5rem 0"}}>HELP CENTER</h1>
      <hr className="hr_divider"/>
      <div className="Help_Accordion_Section" style={{marginTop: "3rem"}}>
        <div className="Help_Accordion_Container">
          <h2 style={{marginBottom: "3rem"}}>FREQUENTLY ASKED QUESTIONS</h2>
          <Accordion></Accordion>
        </div>
        <img className="Help_Accordion_Image" src={Help_Main_Img} alt="" />
      </div>
      <Help></Help>
    </Layout>
  )
}