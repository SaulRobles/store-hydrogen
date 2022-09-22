import { useUrl } from "@shopify/hydrogen";
import InfluencersData from "./influencer.client"
import {Suspense} from 'react'; 

export default function Influencers() {
  const params = useUrl()
  let page = params.searchParams.get('page') || 1

  return(
    <Suspense fallback="Loading...">
      <InfluencersData pageUrl={page}></InfluencersData>
    </Suspense>
  )
}