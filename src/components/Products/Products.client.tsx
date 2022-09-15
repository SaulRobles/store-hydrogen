import React, { Suspense } from "react";
import Carousel from "../Elements/Carousel.client"
import { ProductOptionsProvider, AddToCartButton } from "@shopify/hydrogen";
import Share from "./Share.client"

import '../../i18n';

import ClassicTemplate from "./ProductChildsTemplate.client"

import { useTranslation, Trans } from 'react-i18next';

let counter = false;

export default function Product({ product, childrens, isBundle, shop, lng }) {
  const [ t, i18n ] = useTranslation();
  let main_img_ref = React.useRef(null)

  function Set_Main_Img(e) {
    main_img_ref.current.src = e.target.src
  }

  if(!counter) {
    i18n.changeLanguage(lng)
    counter = true;
  }

  return(
    <Suspense fallback="loading">
    <ProductOptionsProvider data={product}>
      <div className="Product_Main_Div">
        <div className="Product_Information_Container">  {/* Imagenes e Informacion del producto */}
          <div className="Product_Information_Image"> {/* Imagenes */}
            <img ref={main_img_ref} src={product.images.nodes[0].url || ""} alt="" />
            <Carousel images={product.images.nodes} main={Set_Main_Img} multipleProducts={false}></Carousel>
          </div> 
          <div className="Product_Information_Data"> { /* Informacion del producto */ }
            {/* Template Start */}
            {isBundle &&
              Object.keys(childrens).map((child) => {
                return (<ClassicTemplate product={childrens[child].data.product} isBundle={isBundle} shop={shop}></ClassicTemplate>)
              })
            }
            {!isBundle &&
              <ClassicTemplate product={product} isBundle={isBundle} shop={shop}></ClassicTemplate>
            }
            {/* Template End */}
            {/* Assistence Button */}
            <div></div>
            {/* Description */}
            <span>Description</span> {/* Esto es un acordeon */}
            <div dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
          </div> 
          
        </div>
        <div className="Product_Social_Div"> {/* Redes Sociales */}
          <Share></Share>
        </div> 
        <div> {/* Related Products */}
          <span>RELATED PRODUCTS</span>
          <div> {/* Carousel de productos relacionados */}
            <Carousel images={product.collections.nodes[0].products.nodes} multipleProducts={true}></Carousel>
          </div>
        </div> 
      </div>
    </ProductOptionsProvider>
    </Suspense>
  )
}