import { useShopQuery, CacheLong, gql, useSession } from "@shopify/hydrogen";
import Template from "./Products.client"
import { fetchSync } from "@shopify/hydrogen";

export default function Bundle({ product, shop }) {
  let isBundle = false /* Has children elements flag */
  let ChildItems = {}
  let {language} = useSession()

  console.log("Producto:")
  console.log(product?.metafields[2])

  const apiRoot = "https://sys.sbc.mx/";
  const api = apiRoot + "api";

  const sizeChartTitle = product?.metafields[2]?.value || '';
  const sizeChartFind = `/v2/shop/size/chart/findBySlug?slug=${sizeChartTitle}`;

  const apiFind = api + sizeChartFind;

  const {data} = fetchSync(apiFind, {
    headers: {
      'Accept': 'application/json',
      'Accept-Language': language || 'en'
  }}).json();

  /* Child query */
  function query(handle: string) {
    let prod = `"${handle}"`

    const CHILD_QUERY = gql`
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

          createdAt
          tags
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
    return CHILD_QUERY;
  }
  
  function setChildrens() {
    product.metafields?.map((meta) => {
      if(meta) {
        if(meta.key === "template_sale") {
          (meta?.value || '') === "bundle" ? isBundle = true : isBundle = false;
        } else if (meta.key === "variant_items") { //Asigna los childs
          let helper = JSON.parse(meta.value) || {}
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
    <Template sizechart={data} product={product} childrens={ChildItems} isBundle={isBundle} shop={shop.data.cart} lng={language || 'en'}/>
  )
}