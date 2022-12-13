import { Layout } from "../../../components/Global/Layout.server"
import BoutiquesData from "../../../components/Boutiques/boutiques.server"
import { useSession, useRouteParams } from "@shopify/hydrogen";

export default function Boutiques() {
  let {language} = useSession()
  const {handle} = useRouteParams();

  let page;
  const handleSplit = handle.split('page=')
  if(handleSplit.length === 2) {
    page = handleSplit[1]
  } else {
    page = handle
  }

  return (
    <Layout>
      <BoutiquesData lng={language} handle={page}></BoutiquesData>
    </Layout>
  )
}