import { ProductOptionsProvider } from "@shopify/hydrogen";
import React, { useEffect } from 'react';
import Modal from "../Elements/AddProductModal.client"

export default function Extended({ hook, hookFunction, product, extendedItems }) {
  const [qty, setQty] = React.useState({value: 1})
  /* console.log(hook) */

  const set_Qty = (e) => {
    if(e.target.value === "plus") {
      if(qty.value <= hook?.variant?.quantityAvailable) setQty({...qty, value: (qty.value + 1)})
    } else if (e.target.value === "less") {
      if(qty.value > 1) setQty({...qty, value: (qty.value - 1)})
    }
  }

  function setVariant() {
    const title = hook?.option + ' / ' + hook?.color;
    const reverse_title = hook?.color + ' / ' + hook?.option;
    hook?.active?.variants?.nodes?.forEach((element) => {
      if(element.title === title || element.title === reverse_title) {
        hookFunction({...hook, variant: element})
      }
    })
  }

  const option_button = (e) => {
    let parent;
    if(e.target.localName === "img") {
      e = e.target.offsetParent
      parent = e.parentNode
    } else {
      parent = e.target.parentNode
      e = e.target
    }

    parent.childNodes.forEach(element => {
      element.classList.remove("Product_Active_Option")
    })

    e.classList.add("Product_Active_Option")
  }

  function setSizes() {
    const variantAux = hook?.active?.variants?.nodes?.filter((ele) => ele.availableForSale).map((ele) => ele.title.split(" / "))

    const auxArray = []

    hook?.active?.options?.forEach(element => {
      if(element?.name?.toLowerCase() === 'color') {
        element?.values?.forEach((colors) => {
          const aux = {key: colors, values: []}
          auxArray.push(aux)
        })
      }
    });
  
    variantAux.forEach(element => {
      const color = element[1];
  
      auxArray.forEach((ele) => {
        if(ele.key === color) {
          ele.values.push(element[0])
        }
      })
    });
  
    hookFunction({...hook, sizes: [...auxArray]})
  }

  useEffect(() => {
    setSizes()
  }, [hook?.color]);

  useEffect(() => {
    if(hook?.option !== '') {
      setVariant()
    }
  }, [hook?.option])

  function setActive(data='', color='', option='') {
    let variant = hook?.variant
    if(data === '' || data === null) data = hook?.active
    if(color === '' || color === null) color = hook?.color 
    if(option === '' || option === null) option = hook?.option
    if(color !== hook?.color) {
      option = ''
      variant = ''
    }
    hookFunction({...hook, active: data, color, option, variant})
  }

  return (
    <ProductOptionsProvider data={hook?.active}>
      {/* SKU */}
      <span style={{marginBottom: "0"}}>SKU: {hook?.variant?.sku}</span>
      {/* Titulo */}
      <h1 style={{fontSize: "2rem", fontFamily: "Hind,sans-serif", fontWeight: "500"}}>{hook?.active?.title}</h1>
      {/* Jeans - Notificacion */}
      {hook?.active?.metafields[2]?.value === "jeans" &&  
        <div style={{background: "#ff000059", alignItems: "center", display: "flex", padding: "0 1rem", marginTop: "1rem"}}>
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/danger_icon_48.png?v=1670271532" alt="Danger Icon" /> {/* Danger Icon */}
          <span style={{color: "white", paddingLeft: "2rem"}}>{t("products.jeans_warning")}</span>
        </div>
      }
      {/* Precio */}
      <span style={{fontSize: "0.8rem", fontWeight: "600"}}>${hook?.active?.priceRange?.maxVariantPrice?.amount} {hook?.active?.priceRange?.maxVariantPrice?.currencyCode}</span>
      
      {/* Opciones (Size, color, style) */}
      <div style={{display: "flex", flexDirection: "column"}}>

        <div className="Product_Options_Container">
          <span style={{marginBottom: "0"}}>Colors: </span>
          <div className="Product_Options_Values">
            {product?.options[1]?.values.map((color: String, index) => <button className={index === 0 ? 'Product_Active_Option' : ''} onClick={(e) => {setActive(product, color); option_button(e)}}>{color}</button>)}
            {extendedItems.map((product) => product?.options[1]?.values.map((color: String) => <button onClick={(e) => {setActive(product, color); option_button(e)}}>{color}</button>))}
          </div>
        </div>

        <div className="Product_Options_Container">
          <span style={{marginBottom: "0"}}>Sizes: </span>
          <div className="Product_Options_Values">
            {/*sizeArray && sizeArray[0]?.values?.map((ele, index) => <button name={'size'} onClick={option_button} value={ele} key={index}>{ele}</button>)*/}
            {hook && (hook?.sizes || []).map((variant, index) => {
              return hook?.color === variant?.key ? (variant?.values || []).map((size, i) => <button onClick={(e) => {setActive(null, null, size); option_button(e)}} key={i}>{size}</button>) : ''
            })}
          </div>
        </div>

      </div>
      
      {/* Qty y Add to Cart Button */}
      {hook?.variant?.quantityAvailable <= 0 &&
        <h3>{t("products.unavailable_product")}</h3> //Agregar un avisame cuando este disponible)?
      }
      {hook?.variant !== '' && hook?.variant?.quantityAvailable > 0 &&
        <div className="Product_Buy_Div">
          <div className="Product_Buy_Qty_Div"> {/* Qty */}
            <button onClick={set_Qty} value="less">-</button>
            <span>{qty.value}</span>
            <button onClick={set_Qty} value="plus">+</button>
          </div>
          <div className="Product_Buy_Button"> {/* Add to Cart */}
            <Modal product={hook?.active} qty={qty} variant={hook?.variant}></Modal>
          </div>
        </div>
      }
    </ProductOptionsProvider>
  )
}