import { Layout } from "../../../components/Global/Layout.server"
import InfluencerData from "../../../components/Influencers/influencer.server"
import { useSession } from "@shopify/hydrogen";
import {useRouteParams} from '@shopify/hydrogen';

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
      <InfluencerData lng={language} handle={page}></InfluencerData>
    </Layout>
  )
}