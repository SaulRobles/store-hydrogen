import React from "react";
//import { Link, Image, Money } from "@shopify/hydrogen";

export default function CollectionCards({ collection }){
  let products
  if(collection) products = collection.products

  return(
    <div className="card_wrapper">
      {(products?.nodes || []).map((product, index) => (
        <div key={index} className="card_container">
          <a href={product.onlineStoreUrl} className="card_information">
            <img src={product.images.nodes[0].url} alt={product.images.nodes[0].altText} />
            <span>{product.title}</span>
            <span>{product.priceRange.maxVariantPrice.currencyCode} {product.priceRange.maxVariantPrice.amount}</span>
          </a>
        </div>
      ))}
    </div>
  )
}