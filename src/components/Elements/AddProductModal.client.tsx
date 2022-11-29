import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddToCartButton, useCart } from "@shopify/hydrogen";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
//@ts-ignore
export default function cartModal({ product, variant, qty, shop }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let TermsCheckBoxRef = React.useRef(null);
  let AssistanceCheckBoxRef = React.useRef(null);
  let [disableCheckButton, setdisableCheckButton] = React.useState(false)
  
  let cart = useCart();
  //console.log(cart)

  const { checkoutUrl, cost, lines  } = useCart();

  //console.log("Modal")
  //console.log(variant)
  //console.log(product)

  function checkBox(){
    //@ts-ignore
    if(AssistanceCheckBoxRef.current.firstChild.checked && TermsCheckBoxRef.current.firstChild.checked) {
      setdisableCheckButton(true)
    } else {
      setdisableCheckButton(false)
    }
  }

  return (
    <div>
      <AddToCartButton
        variantId={variant.id}
        quantity={qty.value}
        accessibleAddingToCartLabel="Adding item to your cart"
        onClick={handleOpen}
      >
        ADD TO CART
      </AddToCartButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='Product_Modal_Main_Div'>
            {/* Parte Izquierda */}
            <div className='Product_Modal_Left_Div'>
              <div>
                <h2 style={{marginBottom: "1rem", fontWeight: "600"}}>Added to cart successfully</h2>
              </div>
              <div>
                {/* <img src={variant.image.url} alt="" /> */
                  variant.image ? <img src={variant.image.url} alt="" /> : <img src="" alt="" />
                }
              </div>
              <div className='Product_Modal_Information'>
                <h3>{product.title}</h3> {/* Name */}
                <p>{/*@ts-ignore*/}
                  {variant.selectedOptions && variant.selectedOptions.map((variant, index) => 
                    (<span><strong>{variant.name}:</strong> {variant.value}</span>))}  
                </p> {/* Options */}
                <span><strong>QTY:</strong> {qty.value}</span> {/* Cantidad de pz's */}
                {
                  
                }
              </div>
            </div>
            {/* Parte Derecha */}
            <div className='Product_Modal_Right_Div'>
              <div className='Product_Modal_Cart_Information'>
                {/* <span style={{marginBottom: "1rem"}}>There are {shop.totalQuantity + qty.value} items in your cart</span> */} {/* Qty Items in the cart */}
                {/* <p><strong>Total: </strong><span style={{fontSize: "1.5rem", fontWeight: "bold"}}>${parseInt(shop.cost.totalAmount.amount) +  (parseInt(variant.priceV2.amount) * qty.value)} {shop.cost.totalAmount.currencyCode}</span></p> */} {/* Total De todos los items del carrito */}
              </div>
              <div className='Product_Modal_Buttons_Div'> {/* Botones */}
                <Button className='Product_Modal_Buttons' variant="outlined">Continue Shopping</Button>
                <Button className='Product_Modal_Buttons' variant="outlined">View Cart</Button>
              </div>
              <div> {/* Terminos y condiciones */}
                <FormGroup>
                  <FormControlLabel control={<Checkbox onClick={checkBox} ref={TermsCheckBoxRef} color="default"/>} label="I agree with the terms and conditions" />
                  <FormControlLabel control={<Checkbox onClick={checkBox} ref={AssistanceCheckBoxRef} color="default"/>} label="I have received assistance before" />
                </FormGroup>
              </div>
              <div className='Product_Modal_Buttons_Div'>
                <Button disabled={!disableCheckButton} className='Product_Modal_Buttons' variant="outlined"><a href={checkoutUrl}>PROCEED TO CHECKOUT</a></Button> {/* Proceder a comprar */}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
