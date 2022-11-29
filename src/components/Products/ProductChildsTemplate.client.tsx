import React from "react";
import Button from '@mui/material/Button';

import Modal from "../Elements/AddProductModal.client"

import { ProductOptionsProvider, AddToCartButton } from "@shopify/hydrogen";

export default function Child({ product, isBundle, shop }) {
  //console.log(product)

  const [information, setInformation] = React.useState({});
  const [qty, setQty] = React.useState({value: 1})
  let variant = {}

  function set_Variant() {
    //console.log(information)
    let title = Object.values(information).join(' / ')
    let reverse_title = Object.values(information).reverse().join(' / ')
    product.variants.nodes.forEach((element) => {
      if(element.title === title || element.title === reverse_title) {
        
        variant = element
        //console.log(variant)
      }
    })
  }

  set_Variant()

  const option_button = (e) => {
    //console.log(e)
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
      { /* Informacion del producto */ }
      <hr style={{marginTop: "2rem", marginBottom: "2rem"}} className="hr_divider"/>
      {/* SKU */}
      <span>SKU: {variant.sku}</span>
      {/* Titulo y Precios */}
      <h1>{product.title}</h1>
      <span>${product.priceRange.maxVariantPrice.amount} {product.priceRange.maxVariantPrice.currencyCode}</span>
      {isBundle && <img className="Bundle_Img_Div" src={product.images.nodes[0].url} alt="" />}
      {/* Opciones (Size, color, style) */}
      <div>
        {product.options.map((option, index) => (
          <div key={index} className="Product_Options_Container">
            <span>{option.name}: </span>
            <div className="Product_Options_Values">
              {option.name.toLowerCase() === "style" && option.values.map((val, index) => <Button name={option.name} onClick={option_button} value={val} key={index}><img src={product.variants.nodes[index].image.url} /></Button>)}
              {option.name.toLowerCase() !== "style" && option.values.map((val, index) => <Button name={option.name} onClick={option_button} value={val} key={index}>{val}</Button>)}
            </div>
          </div>
        ))}
      </div>

      {/* Qty y Add to Cart Button */}
      {variant.quantityAvailable <= 0 &&
        <h3>Esta variante de producto no se encuentra disponible</h3> //Agregar un avisame cuando este disponible)?
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