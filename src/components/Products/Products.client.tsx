import React, { Suspense } from "react";
import Carousel from "../Elements/Carousel.client"
import { ProductOptionsProvider } from "@shopify/hydrogen";
import Share from "./Share.client"
import ClassicTemplate from "./ProductChildsTemplate.client"
import Tags from "./Products-Tags.client"
import Sizechart from "./Product-Sizechart-Modal.client"
import AssistenceButton from "./Product-Assistance-Button.client"
import Calculator from "./Product-Calculator.client"

/* import ProductWidget from "./LetMeKnow-Widget.client" */

import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

export default function Product({ sizechart, product, childrens, isBundle, shop, lng, isExtended, extended }) {
  const [ t, i18n ] = useTranslation()
  let main_img_ref = React.useRef(null)
  let calculator = null;

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  if(product?.metafields[2]?.value) calculator = product?.metafields[2]?.value;

  /* Arreglo de las calculadoras de tallas disponibles */
  const calculatorsAvailable = [
    "jeans", 
    "jeans-travel-classic", 
    "jeans-travel-high", 
    "hourglass-waist-trainer", 
    "hourglass-waistcoat", 
    "hourglass-waist-trainer-extreme", 
    "hourglass-waistcoat-extreme"
  ]

  /* console.log(product)
  console.log(JSON.parse(product?.metafields[5]?.value)) */
  console.log(isExtended)
  console.log(extended)

  /* Funcion para asignar la imagen principal del carrousel */
  function Set_Main_Img(e) {
    main_img_ref.current.src = e.target.src
  }

  return(
    <Suspense fallback="loading">
      <ProductOptionsProvider data={product}>
        {/* Let Me Know when Product is Available Widget */}
        {/* <ProductWidget product={product} childrens={childrens}/> */}
        <div className="Product_Main_Div">
          <div className="Product_Information_Container">  {/* Imagenes e Informacion del producto */}
            <div className="Product_Information_Image"> {/* Imagenes */}
              <img ref={main_img_ref} src={product?.images?.nodes[0]?.url || ""} alt="" />
              <Carousel images={product?.images?.nodes} main={Set_Main_Img} multipleProducts={false}></Carousel>
            </div> 
            <div className="Product_Information_Data"> { /* Informacion del producto */ }
              { /* Informacion del producto */ }
              <hr style={{marginTop: "1rem", marginBottom: "0rem", marginLeft: "0rem", width: "100%"}} className="hr_divider"/>
              {/* Tags */}
              <div style={{position: "initial", marginTop: "1rem"}} className='tags_div'>
                <Tags product={product} childrens={childrens} isBundle={isBundle}/>
              </div>
              {/* Template Start */}
              {isBundle &&
                Object.keys(childrens).map((child) => {
                  return (<ClassicTemplate product={childrens[child].data.product} isBundle={isBundle} shop={shop} lng={lng}></ClassicTemplate>)
                })
              }
              {!isBundle &&
                <ClassicTemplate product={product} isBundle={isBundle} shop={shop} lng={lng}></ClassicTemplate>
              }
              {/* Template End */}
              {/* Sizechart */}
              {sizechart ? <Sizechart data={sizechart} lng={lng} /> : ''}
              {/* Assistence Button */}
              <AssistenceButton lng={lng}/>
              {/* Calculadora de tallas */}
              {calculator && calculatorsAvailable.includes(calculator) ? <Calculator query={calculator} lng={lng} product={product}></Calculator> : ''}
              {/* Description */}
              <span style={{color: "#e0c091"}}>{t("products.description")}</span> {/* Esto es un acordeon */}
              <div dangerouslySetInnerHTML={{__html: product?.descriptionHtml || ''}} />
            </div> 
          </div>
          <div className="Product_Social_Div" style={{marginBottom: "0", height: "3rem", display: "flex", alignItems: "center"}}> {/* Redes Sociales */}
            <Share></Share>
          </div> 
          <div style={{margin: "0 10rem"}}> {/* Related Products */}
            <span>RELATED PRODUCTS</span>
            <div style={{marginTop: "1rem"}}> {/* Carousel de productos relacionados */}
              <Carousel images={product?.collections?.nodes[0]?.products?.nodes} multipleProducts={true}></Carousel>
            </div>
          </div>
        </div>
      </ProductOptionsProvider>
    </Suspense>
  )
}