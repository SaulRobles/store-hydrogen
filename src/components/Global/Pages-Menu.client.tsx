import React from "react"

export default function Pages_Menu({ collection }){

  return(
    <div className="sub_menu">
      {(collection?.items || []).map((collection, index) =>
        <a key={index} href={collection.url}>{collection.title}</a>
      )}
    </div>
  )
}