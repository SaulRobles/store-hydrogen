import HomeTemplate from "./Home.client"
import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";

export default function HomeQuery({lng}) {

  const collections = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });
  const nuevos = useShopQuery({
    query: collection_nuevos,
    cache: CacheLong(),
  });
  const destacados = useShopQuery({
    query: collection_Destacados,
    cache: CacheLong(),
  });
  const wanted = useShopQuery({
    query: collection_MostWanted,
    cache: CacheLong(),
  });
  

  return(
    <HomeTemplate collection={collections} nuevos={nuevos} destacados={destacados} wanted={wanted} lng={lng}></HomeTemplate>
  )
}

const SHOP_QUERY = gql`
  query layout {
    collections(first: 20) {
      nodes {
        title
        onlineStoreUrl
        image {
          url
          altText
        }
      }
    },
  }
`;

const collection_nuevos = gql`
  query layout {
    collection(handle: "nuevos"){
      handle
      products(first: 10){
        nodes{
          title
          onlineStoreUrl
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1){
            nodes{
              url
              altText
            }
          }
          tags
          metafield(namespace: "store", key: "published_at") {
            key
          	type
          	value
          }
          createdAt
        }
      }
    }
  }
`;

const collection_Destacados = gql`
  query layout {
    collection(handle: "destacados"){
      handle
      products(first: 10){
        nodes{
          title
          onlineStoreUrl
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1){
            nodes{
              url
              altText
            }
          }
          tags
          metafield(namespace: "store", key: "published_at") {
            key
          	type
          	value
          }
          createdAt
        }
      }
    }
  }
`;

const collection_MostWanted = gql`
  query layout {
    collection(handle: "the-most-wanted"){
      handle
      products(first: 10){
        nodes{
          title
          onlineStoreUrl
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1){
            nodes{
              url
              altText
            }
          }
          tags
          metafield(namespace: "store", key: "published_at") {
            key
          	type
          	value
          }
          createdAt
        }
      }
    }
  }
`;