
export default function Pages_Menu({ collection }){

  return(
    <>
      <hr style={{marginBottom: "0.5rem"}} className="hr_divider"/>
      <div className="sub_menu">
        {(collection?.items || []).map((collection, index) =>
          <a key={index} href={collection.url}>{collection.title}</a>
        )}
      </div>
      <div style={{borderBottom: "1px solid rgb(184, 184, 184)", width: "80%", margin: "0 auto", marginTop: "0.5rem"}}></div>
    </>
  )
}