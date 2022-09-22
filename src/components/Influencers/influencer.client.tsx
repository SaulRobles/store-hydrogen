import React, {Suspense} from "react"

import Modal from "../Elements/Modal.client"
import Banner from "../Elements/Banner.client"

import Pagination from '@mui/material/Pagination';

export default function Influencer({pageUrl}) {
  let [data, setData] = React.useState(null);
  let [page, setPage] = React.useState(1);

  if(!data) {
    console.log('no hay data')
    getData(1);
  } else {
    console.log('hay data');
    console.log(data)
  }

  async function getData(page: number){
    try {
      await fetch(`/service/getapidata`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({page, section: "influencers"}),
      }).then(res => res.json()).then(json => setData(json));
    } catch (error: any) {
      return {error: error.toString()}
    }
  }

  function pageChange(event, page) {
    setPage(page)
    getData(page)
  }

  return (
    <div>
      <Banner src={"https://storage.googleapis.com/shop-backend/shopify/influencers/1920_es.mp4"}></Banner>
      <div className="influencers_wrapper">
        {data && data.items?.map((influencer, index) => {
          return(<Modal key={index} influencer={influencer} index={index}></Modal>)
        })}
      </div>
      <div className="influencers_Pagination_Div">
        <Pagination count={Math.ceil(data?.total / 12) || 5} page={page} color="secondary" onChange={pageChange} />
      </div>
    </div>
  )
}