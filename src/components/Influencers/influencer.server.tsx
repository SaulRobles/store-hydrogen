import InfluencersData from "./influencer.client"
import {Suspense} from 'react'; 

export default function Influencers({lng, handle}) {

  return(
    <Suspense fallback="Loading...">
      <InfluencersData lng={lng} handle={handle}></InfluencersData>
    </Suspense>
  )
}