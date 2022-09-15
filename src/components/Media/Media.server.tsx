import MediaTemplate from "./Media.client";
import { fetchSync, useSession } from "@shopify/hydrogen";
import {Suspense} from 'react';

export default function MediaQuery() {
  let {language} = useSession()

  const root = 'https://api-sai.solbeautyandcare.com/';
  const api = 'api/v2/shop/blog/news';
  const url = root + api;

  const {data} = fetchSync(url).json();

  return (
    <Suspense fallback="Loading...">
      <MediaTemplate data={data} lng={language || 'en'}></MediaTemplate>
    </Suspense>
  )
}