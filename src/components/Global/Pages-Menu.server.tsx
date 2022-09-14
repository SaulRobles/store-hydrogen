import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import Menu from "./Pages-Menu.client"
import React from "react";


export default function Pages_Menu() {
  const {
    data: { menu },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return(
    <Menu collection={menu}></Menu>
  )

}

const SHOP_QUERY = gql`
  query layout {
    menu(handle: "submenu-hydrogen") {
      items {
  	    title
        url
      }
    }
  }
`;