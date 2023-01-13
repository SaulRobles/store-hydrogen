import MeasureTemplate from "./Measure.client";
import { fetchSync, useSession } from "@shopify/hydrogen";
import {Suspense} from 'react';

export default function Measure() {
  let {language} = useSession()

  const root = /* 'https://sys.sbc.mx/'; */ 'http://192.168.1.22:3000/'
  const api = 'api/v2/shop/video';
  const url = root + api;

  const {data} = fetchSync(url).json();

  return (
    <Suspense fallback="Loading...">
      <MeasureTemplate data={data} lng={language || 'en'}></MeasureTemplate>
    </Suspense>
  )
}