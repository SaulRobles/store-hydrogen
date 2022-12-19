import { useShopQuery, CacheLong, gql, useSession } from "@shopify/hydrogen";
import Template from "./Products.client"
import { fetchSync } from "@shopify/hydrogen";

export default function Bundle({ product, shop }) {
  let isBundle = false /* Has children elements (bundle) flag */
  let isExtended = false /* Has Extended elements flag */
  let ChildItems = {}
  let ExtendedItems = {}
  let {language} = useSession()

  /* ======== Guia de Tallas ======= */
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
  /* =============================== */

  /* Child query (bundle items) */
  function BundleQuery(handle: string) {
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

  /* Extended Query (Extended Items) */
  function ExtendedQuery(handle: string) {
    let prod = `"${handle}"`

    const EXTENDED_QUERY = gql`
      query layout {
        product(handle: ${prod}) {
          title
          totalInventory

          images(first: 10) {
            nodes {
              altText
              url
            }
          }

          availableForSale
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

          metafields(identifiers: 
          [{namespace: "store", key: "template_sale"},
          {namespace: "store", key: "variant_items"},
          {namespace: "store", key: "sizechart"},
          {namespace: "store", key: "videoId"},
          {namespace: "store", key: "published_at"},
          {namespace: "store", key: "extended_items"}])
          {
            key
            type
            value
          }

        }
      }
    `
    return EXTENDED_QUERY;
  }
  
  function setChildrens() {
    product?.metafields?.map((meta) => {
      if(meta) {
        if(meta?.key === "template_sale") {
          (meta?.value || '') === "bundle" ? isBundle = true : isBundle = false;
          (meta?.value || '') === "extended" ? isExtended = true : isExtended = false;
        } else if (meta?.key === "variant_items") { //Asigna los childs de bundle
          let helper = JSON.parse(meta.value) || {}
          let obj = {}
          helper.map((child) => {
            obj[child.handle] = child;
          })
          Object.keys(obj).map(child => {
            ChildItems[child] = useShopQuery({
              query: BundleQuery(child),
              cache: CacheLong(),
            });
          })
        } else if (meta?.key === "extended_items") { //Asigna los productos extended
          let helper = JSON.parse(meta?.value)
          let obj = {}
          helper.map((extended) => {
            obj[extended.handle] = extended.handle;
          })
          Object.keys(obj).map(extended => {
            ExtendedItems[extended] = useShopQuery({
              query: BundleQuery(extended),
              cache: CacheLong(),
            });
          })
        }
      }
    })
  }

  setChildrens()

  return (
    <Template sizechart={data} product={product} childrens={ChildItems} isBundle={isBundle} extended={ExtendedItems} isExtended={isExtended} shop={shop.data.cart} lng={language || 'en'}/>
  )
}