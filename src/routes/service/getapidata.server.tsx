import type {HydrogenApiRouteOptions, HydrogenRequest} from '@shopify/hydrogen';

export async function api(
  request: HydrogenRequest,
  {session}: HydrogenApiRouteOptions) {

    /* if(request.method === 'GET') {
      let sessionData = await session?.get()
      if(!sessionData?.language) {
        return ({lng: 'en'})
      }
      return ({lng: sessionData?.language})
    } */

    if(request.method === 'POST') {
      let body = request?.body?.toString();
      let {page, section} = JSON.parse(body)

      if(section === "influencers") {
        let listQuery = {
          page: page || 1,
          limit: 12,
          search: '',
          sort: 'asc'
        }
  
        const root = 'https://api-sai.solbeautyandcare.com/';
        const api = 'api/v2/shop/influencer/list';
        const params = '?'+new URLSearchParams(listQuery).toString();
        const url = root + api;
        const {data} = await fetch(url+params).then(res => res.json());
  
        return data;
      }

      
    }

    return new Response(null, {status: 400});
}