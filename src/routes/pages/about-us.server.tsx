import { Layout } from "../../components/Global/Layout.server"
import AboutUs from "../../components/AboutUs/About-Us.client"
import { useSession } from "@shopify/hydrogen";

export default function Boutiques() {
  let {language} = useSession()

  return (
    <Layout>
      <AboutUs lng={language || 'en'}></AboutUs>
    </Layout>
  )
}