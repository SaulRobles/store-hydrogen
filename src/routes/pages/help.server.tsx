import { Layout } from "../../components/Global/Layout.server"
import Help from "../../components/Help/Help.client"
import { useSession } from "@shopify/hydrogen";

export default function HelpServer() {
  let {language} = useSession()

  return (
    <Layout>
      <Help lng={language || 'en'}></Help>
    </Layout>
  )
}