import React from "react"

export default function Pages_Menu({ collection }){

  return(
    <div className="sub_menu">
      {(collection?.nodes || []).map((collection, index) =>
        <a key={index} href={collection.onlineStoreUrl}>{collection.title}</a>
      )}
    </div>
  )
}