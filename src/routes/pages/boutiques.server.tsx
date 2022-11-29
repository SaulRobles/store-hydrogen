import { Layout } from "../../components/Global/Layout.server"
import BoutiquesData from "../../components/Boutiques/boutiques.server"
import { useSession } from "@shopify/hydrogen";

export default function Boutiques() {
  let {language} = useSession()

  return (
    <Layout>
      <BoutiquesData lng={language} handle={null}></BoutiquesData>
    </Layout>
  )
}