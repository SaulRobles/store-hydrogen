

export default function Tags({product, childrens, isBundle}){
  /* console.log(product)
  console.log(childrens)
  console.log(isBundle) */

  let creationDate;
  const actualDate = new Date()
  const creationProduct = new Date(product?.createdAt)
  let res;
  let days;

  if(product?.metafields[4]?.value) {
    creationDate = new Date(product?.metafields[4].value)
    res = actualDate.getTime() - creationDate.getTime()
    days = Math.ceil(res / (1000 * 3600 * 24))
  } else {
    res = actualDate.getTime() - creationProduct.getTime()
    days = Math.ceil(res / (1000 * 3600 * 24))
  }


  return (
    <>
      {/* new */}
      {days && days < 15 ? <div style={{margin: "0 0.1rem", fontSize: "12px"}} className='tag_new'>New</div> : ''}
      {/* restock, preventa */}
      {product?.tags?.map((tag, index) => {
        return tag === 'restock' || tag === 'preventa' ? <div key={index} style={{margin: "0 0.1rem", fontSize: "12px"}} className={`tag_${tag}`}>{tag}</div> : ''
      })}
      {/* Sold Out */}
      {product?.availableForSale ? '' : <div style={{margin: "0 0.1rem", fontSize: "12px"}} className='tag_soldout'>Sold Out</div>}
    </>
  )
}