import { useShopQuery, CacheLong, gql, useSession } from "@shopify/hydrogen";

/* import Test from "./test.client" */
import Template from "./Products.client"

export default function Bundle({ product, shop }) {
  let isBundle = false;
  let ChildItems = {}

  let {language} = useSession()

  function query(handle) {
    let prod = `"${handle}"`

    const SHOP_QUERY = gql`
      query layout {
        product(handle: ${prod}) {
          title
          totalInventory

          images(first: 1) {
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
            image {
              altText
              url
            }
            selectedOptions {
              name
              value
            }
            price
          }
        }

        }
      }
    `
    return SHOP_QUERY;
  }
  
  function setChildrens() {
    product.metafields?.map((meta) => {
      if(meta) {
        if(meta.key === "template_sale") {
          meta.value === "bundle" ? isBundle = true : isBundle = false;
        } else if (meta.key === "variant_items") { //Asigna los childs
          let helper = JSON.parse(meta.value)
          let obj = {}
          helper.map((child) => {
            obj[child.handle] = child;
          })
          Object.keys(obj).map(child => {
            ChildItems[child] = useShopQuery({
              query: query(child),
              cache: CacheLong(),
            });
          })
        }
      }
    })
  }

  setChildrens()

  return (
    <Template product={product} childrens={ChildItems} isBundle={isBundle} shop={shop.data.cart} lng={language || 'en'}/>
  )
}