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
      let data = await request.formData()
      let firstTime = data.get('showModal')
      await session.set('firstTime', firstTime)
      return new Response('Mostrar el modal inicial')
    }

    return new Response(null, {status: 400});
}