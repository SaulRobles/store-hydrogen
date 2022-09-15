import React from "react";

import Pagination from "../Elements/Pagination.client"

import Modal from "../Elements/BoutiqueModal.client"

import Banner from "../Elements/Banner.client"

export default function Boutiques({data, lng}) {

  return(
    <>
      <Banner src={"https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_web_1920_x_911_4.mp4?v=1643822193"}></Banner>
      <div className="Boutiques_card_wrapper">
        {data && data.items?.map((boutique, index) => {
          if(boutique.status !== "Empty") return(<Modal key={index} boutique={boutique} />)
        })}
      </div>
      <div className="influencers_Pagination_Div">
        <Pagination data={data}></Pagination>
      </div>
    </>
  )
}