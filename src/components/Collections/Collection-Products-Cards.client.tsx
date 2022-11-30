import React from 'react';
//import { Link, Image, Money } from "@shopify/hydrogen";
import {fetchSync} from '@shopify/hydrogen';

import Shopify from '@shopify/shopify-api';

export default function CollectionCards({ collection }){
  const [page, setPage] = React.useState(1);

  /* const client = new Shopify.Clients.Rest(
    "solbeautyandcare-mx.myshopify.com",
    "65640e6f21aaf5305ac02518d9793b1a"
  );

  async function test() {
    const product = await client.get({
      path: `products/6968874664112`,
      query: {id: 1, title: "title"}
    });

    return product
  }

  console.log(test()) */
  
  const root = "https://solbeautyandcare-mx.myshopify.com/"
  const api = "admin/products/count.json"
  const url = root + api
  
  let products
  let collectionCount;
  if(collection) {
    products = collection.products 
    collectionCount = collection.id.split("gid://shopify/Collection/")
    const params = `?status=active&collection_id=${collectionCount[1] || 1}`
    console.log(url + params)
    /* const data = fetchSync(url+params).json();
    console.log(data) */
    fetch(url+params, {
      method: "GET",
      headers: {
        "X-Shopify-Access-Token": "65640e6f21aaf5305ac02518d9793b1a",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }

  /* console.log(collection)
  console.log(collectionCount[1]) */

  return(
    <div className="product_wrapper">
      {(products?.nodes || []).map((product, index) => {
        let creationDate;
        const actualDate = new Date()
        const creationProduct = new Date(product?.createdAt)
        let res;
        let days;

        if(product?.metafield?.value) {
          creationDate = new Date(product?.metafield?.value)
          res = actualDate.getTime() - creationDate.getTime()
          days = Math.ceil(res / (1000 * 3600 * 24))
        } else {
          res = actualDate.getTime() - creationProduct.getTime()
          days = Math.ceil(res / (1000 * 3600 * 24))
        }

        return (
          <div key={index} className="card_container">
            <div  className="card_information">
              <div>
                <a href={product.onlineStoreUrl}><img src={product.images.nodes[1].url} alt={product.images.nodes[1].altText} /></a>
                <a style={{position: "absolute", top: "0"}} className="card_image" href={product.onlineStoreUrl}><img src={product.images.nodes[0].url} alt={product.images.nodes[0].altText} /></a> 
              </div>
              <a href={product.onlineStoreUrl} className="card_text">{product.title}</a>
              <span style={{marginBottom: "1rem"}}>{product.priceRange.maxVariantPrice.currencyCode} {product.priceRange.maxVariantPrice.amount}</span>
            </div>
            <div className='tags_div'>
              {/* new */}
              {days && days < 15 ? <div style={{margin: "0 0.1rem", fontSize: "12px"}} className='tag_new'>New</div> : ''}
              {/* restock, preventa */}
              {product?.tags?.map((tag, index) => {
                return tag === 'restock' || tag === 'preventa' ? <div key={index} style={{margin: "0 0.1rem", fontSize: "12px"}} className={`tag_${tag}`}>{tag}</div> : ''
              })}
              {/* Sold Out */}
              {product?.availableForSale ? '' : <div style={{margin: "0 0.1rem", fontSize: "12px"}} className='tag_soldout'>Sold Out</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}