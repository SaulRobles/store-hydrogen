import { Layout } from "../../../components/Global/Layout.server"
import BoutiquesData from "../../../components/Boutiques/boutiques.server"
import { useSession, useRouteParams } from "@shopify/hydrogen";

export default function Boutiques() {
  let {language} = useSession()
  const {handle} = useRouteParams();

  return (
    <Layout>
      <BoutiquesData lng={language} handle={handle}></BoutiquesData>
    </Layout>
  )
}