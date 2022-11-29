import { Carousel } from 'antd';
import React from 'react';
import default_img from "../../assets/default/sol_collection_default_img.jpg"

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export const BannerCarousel = ({banners}) => {

  return(
    <Carousel 
    /* autoplay={true} */
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

/* Main Carousel */
const App: React.FC = ({images, main, params, multipleProducts}) => {
  let products;
  if(multipleProducts) products = [...images]

  return (
    <Carousel slidesToShow={images?.length > 3 ? 4 : 1}>
      {!multipleProducts && images?.map((img, index) => (      
          <div key={index} className="Carousel_Card">
            <img onClick={main} src={img.url} alt={img.altText} />
          </div> 
        ))}

      {multipleProducts && products?.map((ele, index) => (
        <div key={index} className="Carousel_Img_Div">
          <a style={{display: "flex", flexDirection: "column", alignItems: "center"}} href={ele.onlineStoreUrl}>
            <img src={ele.images.nodes[0].url} alt={ele.images.nodes[0].altText} />
            <div className="Carousel_Product_Text">
              <h2>{ele.title}</h2>
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

export default App