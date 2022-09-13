import React from "react";
import { fetchSync, useUrl } from "@shopify/hydrogen";
import InfluencersData from "./influencer.client"
import {Suspense} from 'react'; 

export default function Influencers() {
  const page = useUrl()

  const listQuery = {
    page: page.searchParams.get('page') || 1,
    limit: 12,
    search: '',
    sort: 'asc'
  }

  const root = 'https://api-sai.solbeautyandcare.com/'
  const api = 'api/v2/shop/influencer/list'
  const params = '?'+new URLSearchParams(listQuery).toString();
  const url = root + api

  const {data} = fetchSync(url+params).json()

  return(
    <Suspense fallback="Loading...">
      <InfluencersData data={data}></InfluencersData>
    </Suspense>
  )
}