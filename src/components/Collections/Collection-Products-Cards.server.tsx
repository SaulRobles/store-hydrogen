import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import CardList from "./Collection-Products-Cards.client"

export default function Cards({ handle }) {
  let col;

  if(handle === "all") col = `"todos-los-productos"`
  else col = `"${handle}"`

  const SHOP_QUERY = gql`
  query layout {
    collection(handle: ${col}) {
      id
      products(first: 24) {
        nodes {
          title
          onlineStoreUrl
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          availableForSale
          images(first: 2) {
            nodes {
              altText
              url
            }
          }
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

