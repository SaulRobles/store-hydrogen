import { Layout } from "../../components/Global/Layout.server"
import InfluencerData from "../../components/Influencers/influencer.server"
import { useSession } from "@shopify/hydrogen";

export default function Boutiques() {
  let {language} = useSession()

  return (
    <Layout>
      <InfluencerData lng={language} handle={null}></InfluencerData>
    </Layout>
  )
}