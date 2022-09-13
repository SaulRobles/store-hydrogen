import React from "react";
import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import CardList from "./Collection-Products-Cards.client"

export default function Cards({ handle }) {
  let col;

  if(handle === "all") col = `"todos-los-productos"`
  else col = `"${handle}"`

  const SHOP_QUERY = gql`
  query layout {
    collection(handle: ${col}) {
      products(first: 10) {
        nodes {
          title
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 10) {
            nodes {
              altText
              url
            }
          }
        }
      }
    }
  }
`;

  const {
    data: { collection },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return (
    <CardList collection={collection}></CardList>
  )

  
}

