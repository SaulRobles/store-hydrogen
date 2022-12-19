import { useShopQuery, CacheLong, gql } from "@shopify/hydrogen";
import Query from "../../components/Collections/CollectionQuery.server"
import { Layout } from "../../components/Global/Layout.server";

export default function Collection() {

  const SHOP_QUERY = gql`
    query layout {
      menu(handle: "submenu-hydrogen") {
        items {
          resourceId
          title
          url
        }
      }
    }
  `;

  const {
    data: { menu },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return(
    <Layout>
      <Query data={menu}></Query>
    </Layout>
  )
}