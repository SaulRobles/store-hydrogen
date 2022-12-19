import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import Collections from "./GlobalCollections.client"
import { Suspense } from "react";

export default function CollectionQuery({data}) {
  const {items} = data;

  function getCollectionImg(id = '') {
    id = `"${id}"`

    const SHOP_QUERY = gql`
      query layout {
        collection(id: ${id}) {
          image {
            altText
            url
          }
        }
      }
    `;

    let aux = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
    });

    return aux
  }

  const collections = items.map((ele) => {
    let {data} = getCollectionImg(ele.resourceId);

    return {...ele, img: data?.collection?.image}
  })

  return(
    <Suspense fallback="...Loading">
      <Collections data={collections}></Collections>
    </Suspense>
  )
}