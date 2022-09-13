import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import Menu from "./Pages-Menu.client"
import React from "react";


export default function Pages_Menu() {
  const {
    data: { collections },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return(
    <Menu collection={collections}></Menu>
  )

}

const SHOP_QUERY = gql`
  query layout {
    collections(first: 10) {
      nodes {
        title
        onlineStoreUrl
        image {
          url
          altText
        }
      }
    }
  }
`;