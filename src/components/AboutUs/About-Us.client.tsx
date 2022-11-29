import Cards from "./About-Us-Cards.client"

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';
import { t } from "i18next";

export default function Client({lng}) {
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  return (
    <div>
      {lng === 'en' ? <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_aboutUs_en.webp?v=1669072010"/> : <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_aboutUs_es.webp?v=1669072015"/>}
      {/* Main Image y Main Text */}
      <h1 className="AboutUs_Title">{t("aboutUs.title")}</h1>
      <hr className="hr_divider"/>
      <div className="AboutUs_Main_Img_Information">
        {/* Imagen */}
        <div className="AboutUs_Main_Img">
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/aboutUs_mainImg.webp?v=1669073167" alt="" />
        </div>
        {/* Parrafo */}
        <div className="AboutUs_Main_Information">
          <span dangerouslySetInnerHTML={{__html: t("aboutUs.information")}}></span>
        </div>
      </div>
      {/* Mision, Vision, Valores y politica */}
      <div className="AboutUs_Cards_Container">
        {/* MISSION */}
        <div>
          <Cards information={cardData[0]}></Cards>
        </div>
        {/* VISION */}
        <div>
          <Cards information={cardData[1]}></Cards>
        </div>
        {/* OUR VALUES */}
        <div>
          <Cards information={cardData[2]}></Cards>
        </div>
        {/* QUALITY POLICY */}
        <div>
          <Cards information={cardData[3]}></Cards>
        </div>
      </div>
    </div>
  )
}

let cardData = [
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/mission_1.png?v=1645638760",
    alt: "Mission Img",
    title: t("aboutUs.cards.mision_title"),
    text: t("aboutUs.cards.mision_data")
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/vision_1.png?v=1645638760",
    alt: "Vision Img",
    title: t("aboutUs.cards.vision_title"),
    text: t("aboutUs.cards.vision_data")
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/valores_1150141e-14ee-4d4c-a9a9-20dacbaa7081.png?v=1645638760",
    alt: "Values Img",
    title: t("aboutUs.cards.valores_title"),
    text: t("aboutUs.cards.valores_data")
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/politicas.png?v=1645637465",
    alt: "Policy Img",
    title: t("aboutUs.cards.quality_policy_title"),
    text: t("aboutUs.cards.quality_policy_data")
  },
]