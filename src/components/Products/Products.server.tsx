import React, { Suspense } from "react";
import { useShopQuery, CacheLong, gql, useCart } from "@shopify/hydrogen";

import Bundlequery from "./ProductsBundle.server"
export default function Product({ handle }){
  let prod = `"${handle}"`

  /* Query */
  const SHOP_QUERY = gql`
    query layout {
      product(handle: ${prod}) {
        title
        description
        descriptionHtml
        totalInventory

        images(first: 10) {
          nodes {
            altText
            url
          }
        }

        options {
          name
          values
        }

        priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
        }

        variants(first: 100) {
          nodes {
            id
            title
            sku
            quantityAvailable
            availableForSale
            currentlyNotInStock
            selectedOptions {
              name
              value
            }
            unitPrice {
              amount
              currencyCode
            }
          }
        }

        metafields(identifiers: 
        [{namespace: "store", key: "template_sale"}, 
         {namespace: "store", key: "variant_items"}, 
         {namespace: "store", key: "sizechart"}, 
         {namespace: "store", key: "videoId"}]) 
        {
          key
          type
          value
        }

        collections(first: 1) {
          nodes {
            products(first: 20) {
              nodes {
                title
                onlineStoreUrl
                priceRange {
                  maxVariantPrice {
                    currencyCode
                    amount
                  }
                }
                images(first: 1) {
                  nodes{
                    url
                    altText
                  }
                }
              }
            }
          }
        }

      }
    }
  `
  const {
    data: { product },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  const SHOP_DATA_QUERY = gql`
    query layout {
      
      cart(id: "gid://shopify/Cart/897abee5fcac94646ea56470174e0e42") {
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        checkoutUrl
      }
    }
  `

  const shop = useShopQuery({
    query: SHOP_DATA_QUERY,
    cache: CacheLong(),
  });

  return(
    <Suspense fallback={null}>
      <Bundlequery product={product} shop={shop}></Bundlequery>
    </Suspense>
  )
}
