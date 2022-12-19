

export default function Collections({data}) {

  /* console.log(data) */
  console.log(data)

  return (
    <div style={{display: "flex", margin: "3rem 20rem", flexWrap: "wrap"}} className="Collection_Wrapper">
      {(data || []).map((collection, index) => {

        return (
          <div key={index}>
            <img style={{width: "15rem"}} src={collection?.img?.url} alt={collection?.img?.altText || ''} />
            <button><a href={collection.url}>{collection.title}</a></button>
          </div>
        )
      })}
    </div>
  )
}