import React from "react";
import Pagination from "../Elements/Pagination.client"

import Modal from "../Elements/Modal.client"
import Banner from "../Elements/Banner.client"

export default function Influencer({ data }) {
  return (
    <>
      <Banner src={"https://storage.googleapis.com/shop-backend/shopify/influencers/1920_es.mp4"}></Banner>
      <div className="influencers_wrapper">
        {data && data.items?.map((influencer, index) => {
          return(<Modal key={index} influencer={influencer} index={index}></Modal>)
        })}
      </div>
      <div className="influencers_Pagination_Div">
        <Pagination data={data}></Pagination>
      </div>
    </>
  )
}