import React from "react";
import { fetchSync, useUrl, useSession } from "@shopify/hydrogen";
import BoutiquesTemplate from "./boutiques.client"
import {Suspense} from 'react'; 

export default function Boutiques() {
  const page = useUrl()

  const listQuery = {
    page: page.searchParams.get('page') || 1,
    limit: 20,
    search: '',
    sort: 'asc'
  }

  const root = 'https://api-sai.solbeautyandcare.com/'
  const api = 'api/v2/shop/boutique/list'
  const params = '?'+new URLSearchParams(listQuery).toString();
  const url = root + api

  const {data} = fetchSync(url+params).json()

  let {language} = useSession()

  return(
    <Suspense fallback="Loading...">
      <BoutiquesTemplate data={data} lng={language || 'en'}></BoutiquesTemplate>
    </Suspense>
  )
}