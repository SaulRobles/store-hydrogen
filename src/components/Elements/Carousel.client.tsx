import { Carousel } from 'antd';
import React from 'react';
import default_img from "../../assets/default/sol_collection_default_img.jpg"

export const BannerCarousel = ({banners}) => {

  return(
    <Carousel
    draggable={true}
    arrows={true}
    >
      {banners.map((src, index) => (
        <div key={index}>
          <img style={{width: "100%", height: "60rem"}} src={src}/>
        </div>
      ))}
    </Carousel>
  )
}

/* Main Carousel - Carousel de productos */
const productCarousel: React.FC = ({images, main, multipleProducts}) => {
  let products;
  let showImages;
  if(multipleProducts) {
    products = [...images]
    showImages = 4;
  } else {
    images?.length > 5 ? showImages = 6 : showImages = images?.length
  }

  return (
    <Carousel slidesToShow={showImages} draggable={true} dots={false} arrows={true}>
      {!multipleProducts && images?.map((img, index) => (      
          <div key={index} className="Carousel_Card">
            <img onClick={main} src={img.url} alt={img.altText} />
          </div> 
        ))
      }

      {multipleProducts && products?.map((ele, index) => (
        <div key={index} className="Carousel_Img_Div">
          <a style={{display: "flex", flexDirection: "column", alignItems: "center"}} href={ele.onlineStoreUrl}>
            <img src={ele.images.nodes[0].url} alt={ele.images.nodes[0].altText} />
            <div className="Carousel_Product_Text">
              <h2 style={{fontSize: "12px", cursor: "pointer", fontFamily: "Hind,sans-serif"}}>{ele.title}</h2>
              <p>${ele.priceRange.maxVariantPrice.amount} {ele.priceRange.maxVariantPrice.currencyCode}</p>
            </div>
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export const Collection_Carousel = ({collection, params}) => {

  return (
    <Carousel slidesToShow={4}>
      {collection && collection.map((ele, index) => (
        <div key={index} className="Carousel_Img_Div">
          <a href={ele.onlineStoreUrl}>
            <img src={(ele.image && ele.image.url) ?? default_img} alt={ele.image && ele.image.altText} />
            <div className="Carousel_Product_Text">
              <h2>{ele.title}</h2>
            </div>
          </a>
        </div>
      ))}
    </Carousel>
  )
}

export default productCarousel