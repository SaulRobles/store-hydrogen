import React from "react";
import Cards from "./About-Us-Cards.client"

import AboutUsBanner from "../../assets/AboutUs/Banner_About_Us_dijes_x2520.webp"
import AboutUsImage from "../../assets/AboutUs/Foto_About_Us_x1920.webp"

export default function About_Us() {
  
  return (
    <div>
      {/* Banner */}
      <div>
        <img src={AboutUsBanner} alt="" />
      </div>
      {/* Main Image y Main Text */}
      <h1 className="AboutUs_Title">ABOUT US</h1>
      <hr className="hr_divider" style={{margin: "1rem"}}/>
      <div className="AboutUs_Main_Img_Information">
        {/* Imagen */}
        <div className="AboutUs_Main_Img">
          <img src={AboutUsImage} alt="" />
        </div>
        {/* Parrafo */}
        <div className="AboutUs_Main_Information">
          <span><strong>Sol Beauty and Care was born from the need to give women a tool to be able to look and feel comfortable with their bodies.</strong> We know that each woman is different, so we want each of them to look amazing. Our commentment is to make products designed to improve the quality of life of women with style, comfort and quality.</span>
        </div>
      </div>
      {/* Mision, Vision, Valores y politica */}
      <div className="AboutUs_Cards_Container">
        {/* MISSION */}
        <div>
          <Cards information={mock[0]}></Cards>
        </div>
        {/* VISION */}
        <div>
          <Cards information={mock[1]}></Cards>
        </div>
        {/* OUR VALUES */}
        <div>
          <Cards information={mock[2]}></Cards>
        </div>
        {/* QUALITY POLICY */}
        <div>
          <Cards information={mock[3]}></Cards>
        </div>
      </div>
    </div>
  )
}

let mock = [
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/mission_1.png?v=1645638760",
    alt: "Mission Img",
    title: "MISSION",
    text: `At Sol Beauty and Care we design and produce control and molding garments as an effective tool to make women look and feel good both physically and emotionally, always offering the highest quality products. We want our clients to be able to find an ideal complement in our products, in order to achieve their goal of having the perfect figure.`
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/vision_1.png?v=1645638760",
    alt: "Vision Img",
    title: "VISION",
    text: `To be a company with recognition and high participation in the national and international market, strengthening our sales due to innovation and high quality standards of our products, always being at the leading edge of technologies in our raw materials and production processes to position ourselves as the best option for every woman in control and shape garments.`
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/valores_1150141e-14ee-4d4c-a9a9-20dacbaa7081.png?v=1645638760",
    alt: "Values Img",
    title: "OUR VALUES",
    text: `<strong>Honesty:</strong> Always be and work in an environment of honesty and transparency with our clients, work team and suppliers.
    <br/><br/>
    <strong>Respect:</strong> For Sol Beauty and Care, respect is the key to a good relationship with our clients and with our work team, as well as always promoting an excellent environment of coexistence.
    <br/><br/>
    <strong>Integrity:</strong> We are committed to always acting under values and principles that generate trust, always in compliance with our functions within ethical and legal values. 
    <br/><br/>
    <strong>Sense of belonging:</strong> Our constant growth is the result of the dedication and appreciation that the Sol Beauty and Care team gives to the tasks it performs. 
    <br/><br/>
    <strong>Teamwork:</strong> Each of the members of our team is important for the operation of the company. Cooperation, together with our values, are the perfect combination to keep harmony in all our activities and giving the customer the best experience of care and service. 
    <br/><br/>
    <strong>Quality:</strong> Quality is the basis of our ideology, that is why we are committed to ensuring that all our products meet the highest standards in both raw materials and the production, sale and customer service.`
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/politicas.png?v=1645637465",
    alt: "Policy Img",
    title: "QUALITY POLICY",
    text: `At Sol Beauty and Care we are convinced that the most important thing is customer satisfaction. That is why we have a continuous commitment to satisfy the expectations and requirements expected of our products. In consequence, we have adopted the following principles:
    <br/><br/>
    Creativity and continuous innovation / Trust in our clients and work team / Excellence in our service and customer service / Quality in all our product / Quality in our management system / Social and environmental responsibility / Active participation and mutual benefit among collaborators, suppliers, and customers.`
  },
]