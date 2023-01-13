import GarmentTemplate from "./Garment.client";
import { fetchSync, useSession } from "@shopify/hydrogen";
import {Suspense} from 'react';

export default function Measure() {
  let {language} = useSession()

  const root = /* 'https://sys.sbc.mx/'; */ 'http://192.168.1.22:3000/'
  const api = 'api/v2/shop/video/garment/';
  const url = root + api;

  const {data} = fetchSync(url).json();

  return (
    <Suspense fallback="Loading...">
      <GarmentTemplate data={data} lng={language || 'en'}></GarmentTemplate>
    </Suspense>
  )
}