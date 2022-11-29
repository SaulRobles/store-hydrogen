import React, { Key } from 'react';
import { Carousel } from 'antd';

export const ProductCarousel: React.FC = ({array}) => {

  return (
    <Carousel draggable dots={false} slidesToShow={4} infinite={array.length > 4}>
      {array.map((data, index) => {
        let creationDate;
        const actualDate = new Date()
        const creationProduct = new Date(data?.createdAt)
        let res;
        let days;

        if(data?.metafield?.value) {
          creationDate = new Date(data?.metafield?.value)
          res = actualDate.getTime() - creationDate.getTime()
          days = Math.ceil(res / (1000 * 3600 * 24))
        } else {
          res = actualDate.getTime() - creationProduct.getTime()
          days = Math.ceil(res / (1000 * 3600 * 24))
        }

        //console.log(data)
        return (
          <div key={index}>
            <div style={{padding: "1rem"}}>
              <a href={data.onlineStoreUrl}>
                {/* Image - Badges */}
                <div style={{position: "relative"}}>
                  <img src={data.images?.nodes[0]?.url} alt={data.images?.nodes[0]?.altText || `Main image of product: ${data?.title}`} />
                  {/* badges / tags */}
                  <div className='tags_div'>
                    {/* new */}
                    {days && days < 15 ? <div style={{margin: "0 0.1rem", fontSize: "12px"}} className='tag_new'>New</div> : ''}
                    {/* restock, preventa */}
                    {data?.tags?.map((tag, index) => {
                      return tag === 'restock' || tag === 'preventa' ? <div key={index} style={{margin: "0 0.1rem", fontSize: "12px"}} className={`tag_${tag}`}>{tag}</div> : ''
                    })}
                    {/* Sold Out */}
                    {data?.availableForSale ? '' : <div style={{margin: "0 0.1rem", fontSize: "12px"}} className='tag_soldout'>Sold Out</div>}
                  </div>
                </div>
                {/* Title - price */}
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <h2 className='Home_Product_Title' style={{textAlign: "center"}}>{data?.title}</h2>
                  <span><strong>${data?.priceRange?.maxVariantPrice?.amount} {data?.priceRange?.maxVariantPrice?.currencyCode}</strong></span>
                </div>
              </a>
            </div>
          </div>
        ) 
      })}
    </Carousel>
  );
};

export const CollectionCarousel: React.FC = ({array}) => {

  return (
    <Carousel draggable autoplay slidesToShow={4}>
      {array.map((data, index: Key) => {
        return (
          <div key={index}>
            <div style={{padding: "1rem"}} className='Home_Collection_Card_Div'>
              <img src={data?.image?.url} alt={data?.image?.altText || `${data.title} Collection`} />
              <a className='Home_Buttons' href={data.onlineStoreUrl}>
                <button>{data.title}</button>
              </a>
            </div>
          </div>
        ) 
      })}
    </Carousel>
  );
};