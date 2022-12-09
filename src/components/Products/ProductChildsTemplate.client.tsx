import React from "react";
import Modal from "../Elements/AddProductModal.client"

import { ProductOptionsProvider } from "@shopify/hydrogen";
import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

export default function Child({ product, isBundle, shop, lng }) {
  const [ t, i18n ] = useTranslation();
  const [information, setInformation] = React.useState({});
  const [qty, setQty] = React.useState({value: 1})
  let variant = {}

  const [available, setAvailable] = React.useState([]);
  const [color, setColor] = React.useState({key: ''})

  const sizeArray = available.filter((val) => val.key === color.key)

  if(available.length === 0) {
    const variantAux = product?.variants?.nodes?.filter((ele) => ele.availableForSale).map((ele) => ele.title.split(" / "))
  
    const auxArray = []
  
    product?.options?.forEach(element => {
      if(element.name.toLowerCase() === 'color') {
        element.values.forEach((colors) => {
          if(color.key === '') {
            setColor({...color, key: colors})
            setInformation({...information, color: colors})
          }
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
  
    setAvailable([...auxArray])
  }

  function set_Variant() {
    let title = Object.values(information).join(' / ')
    let reverse_title = Object.values(information).reverse().join(' / ')
    product.variants.nodes.forEach((element) => {
      if(element.title === title || element.title === reverse_title) {
        variant = element
      }
    })
  }

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  set_Variant()

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
    setInformation({...information, [e.name]: e.value})
    setQty({...qty, value: 1})
  }

  const set_Qty = (e) => {
    if(e.target.value === "plus") {
      if(qty.value <= variant.quantityAvailable) setQty({...qty, value: (qty.value + 1)})
    } else if (e.target.value === "less") {
      if(qty.value > 1) setQty({...qty, value: (qty.value - 1)})
    }
  }

  return(
    <ProductOptionsProvider data={product}>
      {/* SKU */}
      <span style={{marginBottom: "0"}}>SKU: {variant.sku}</span>
      {/* Titulo y Precios */}
      {isBundle ? <h1>{product.title}</h1> : <h1 style={{fontSize: "2rem", fontFamily: "Hind,sans-serif", fontWeight: "500"}}>{product.title}</h1> }
      {!isBundle && product.metafields[2]?.value === "jeans" &&  
        <div style={{background: "#ff000059", alignItems: "center", display: "flex", padding: "0 1rem", marginTop: "1rem"}}>
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/danger_icon_48.png?v=1670271532" alt="Danger Icon" /> {/* Danger Icon */}
          <span style={{color: "white", paddingLeft: "2rem"}}>{t("products.jeans_warning")}</span>
        </div>
      }
      <span style={{fontSize: "0.8rem", fontWeight: "600"}}>${product.priceRange.maxVariantPrice.amount} {product.priceRange.maxVariantPrice.currencyCode}</span>
      {isBundle && <img className="Bundle_Img_Div" src={product.images.nodes[0].url} alt="" />}
      {/* Opciones (Size, color, style) */}
      <div style={{display: "flex", flexDirection: "column"}}>

        <div className="Product_Options_Container">
          <span style={{marginBottom: "0"}}>Colors: </span>
          <div className="Product_Options_Values">
            {available.map((option, index) => <button className={index === 0 ? 'Product_Active_Option' : ''} name={'color'} onClick={option_button} value={option.key} key={index}>{option.key}</button>)}
          </div>
        </div>
        
        <div className="Product_Options_Container">
          <span style={{marginBottom: "0"}}>Sizes: </span>
          <div className="Product_Options_Values">
          {sizeArray && sizeArray[0]?.values?.map((ele, index) => <button name={'size'} onClick={option_button} value={ele} key={index}>{ele}</button>)}
          </div>
        </div>

      </div>

      {/* Qty y Add to Cart Button */}
      {variant.quantityAvailable <= 0 &&
        <h3>{t("products.unavailable_product")}</h3> //Agregar un avisame cuando este disponible)?
      }
      {Object.entries(variant).length !== 0 && variant.quantityAvailable > 0 &&
        <div className="Product_Buy_Div">
          <div className="Product_Buy_Qty_Div"> {/* Qty */}
            <button onClick={set_Qty} value="less">-</button>
            <span>{qty.value}</span>
            <button onClick={set_Qty} value="plus">+</button>
          </div>
          <div className="Product_Buy_Button"> {/* Add to Cart */}
            <Modal product={product} qty={qty} variant={variant} shop={shop}></Modal>
          </div>
        </div>
      }
    </ProductOptionsProvider>
  )
}