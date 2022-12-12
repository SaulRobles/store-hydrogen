import InfluencersData from "./influencer.client"
import {Suspense} from 'react'; 

import { LoadingFetch } from "../Global/Loadings.client";

export default function Influencers({lng, handle}) {

  return(
    <Suspense fallback={<LoadingFetch/>}>
      <InfluencersData lng={lng} handle={handle}></InfluencersData>
    </Suspense>
  )
}