import { Layout } from "../../../components/Global/Layout.server"
import InfluencerData from "../../../components/Influencers/influencer.server"
import { useSession } from "@shopify/hydrogen";
import {useRouteParams} from '@shopify/hydrogen';

export default function Boutiques() {
  let {language} = useSession()
  const {handle} = useRouteParams();

  return (
    <Layout>
      <InfluencerData lng={language} handle={handle}></InfluencerData>
    </Layout>
  )
}