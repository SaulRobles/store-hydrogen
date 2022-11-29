import BoutiquesTemplate from "./boutiques.client"
import {Suspense} from 'react'; 

export default function Boutiques({ lng, handle }) {

  return(
    <Suspense fallback="Loading...">
      <BoutiquesTemplate lng={lng} handle={handle}></BoutiquesTemplate>
    </Suspense>
  )
}