import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'ES',
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN || 'solbeautyandcare-mx.myshopify.com',
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN || '65640e6f21aaf5305ac02518d9793b1a',
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
