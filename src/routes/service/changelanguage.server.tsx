import type {HydrogenApiRouteOptions, HydrogenRequest} from '@shopify/hydrogen';

export async function api(
  request: HydrogenRequest,
  {session}: HydrogenApiRouteOptions) {

    if(request.method === 'GET') {
      let sessionData = await session?.get()
      if(!sessionData?.language) {
        return ({lng: 'en'})
      }
      return ({lng: sessionData?.language})
    }

    if(request.method === 'POST') {
      let data = await request.formData()
      let lng = data.get('language')
      await session.set('language', lng)
      return new Response('Cambio de idioma')
    }

    return new Response(null, {status: 400});
}