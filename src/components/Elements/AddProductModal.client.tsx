import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { AddToCartButton, useCart } from "@shopify/hydrogen";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import AssistenceButton from "../Products/Product-Assistance-Button.client"

import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

//@ts-ignore
export default function cartModal({ product, variant, qty, lng }) {
  const [ t, i18n ] = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let TermsCheckBoxRef = React.useRef(null);
  let AssistanceCheckBoxRef = React.useRef(null);
  let [disableCheckButton, setdisableCheckButton] = React.useState(false)
  
  const cart = useCart();
  const { checkoutUrl } = useCart();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

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
      <AddToCartButton variantId={variant.id} quantity={qty.value} accessibleAddingToCartLabel="Adding item to your cart"
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
        <div className='Product_Modal_Wrapper'>
          <div className='Product_Modal_Main_Div'>
            {/* Parte Izquierda */}
            <div className='Product_Modal_Left_Div'>
              <div>
                <h2 style={{marginBottom: "1rem", fontWeight: "600"}}>{t('products.modal.added')}</h2>
              </div>
              <div>
                {variant.image ? <img style={{width: "50%"}} src={variant.image.url} alt="" /> : <img style={{width: "50%"}} src="" alt="" />}
              </div>
              <div className='Product_Modal_Information'>
                <h3>{product.title}</h3> {/* Name */}
                <p>{/* @ts-ignore */}
                  {variant.selectedOptions && variant.selectedOptions.map((variant, index) => 
                    (<span key={index}><strong>{variant.name}:</strong> {variant.value} </span>))}  
                </p>
                <span><strong>{t('products.modal.qty')}</strong> {qty.value}</span> {/* Cantidad de pz's */}
              </div>
            </div>
            {/* Parte Derecha */}
            <div className='Product_Modal_Right_Div'>
              <div className='Product_Modal_Cart_Information'>
                <a href="/cart"><span style={{marginBottom: "1rem"}}>{t('products.modal.cart_qty_1')} {cart?.totalQuantity} {t('products.modal.cart_qty_2')}</span></a> {/* Qty Items in the cart */}
                <p><strong>Total: </strong><span style={{fontSize: "1.5rem", fontWeight: "bold"}}>${cart?.cost?.totalAmount?.amount} {cart?.cost?.totalAmount?.currencyCode}</span></p> {/* Total De todos los items del carrito */}
              </div>
              <div className='Product_Modal_Buttons_Div'> {/* Botones */}
                <Button onClick={handleClose} className='Product_Modal_Buttons' variant="outlined">Continue Shopping</Button>
                <a style={{width: "100%"}} href="/cart"><Button className='Product_Modal_Buttons' variant="outlined">{t('products.modal.view_cart_button')}</Button></a>
              </div>
              <div> {/* Terminos y condiciones */}
                <FormGroup>
                  <FormControlLabel control={<Checkbox onClick={checkBox} ref={TermsCheckBoxRef} color="default"/>} label={t('products.modal.terms_conditions')} />
                  <FormControlLabel control={<Checkbox onClick={checkBox} ref={AssistanceCheckBoxRef} color="default"/>} label={t('products.modal.assistance')} />
                </FormGroup>
              </div>
              <div style={{margin: "1rem 0"}}>
                <AssistenceButton lng={'en'} />
              </div>
              <div className='Product_Modal_Buttons_Div'>
                <Button disabled={!disableCheckButton} className='Product_Modal_Buttons' variant="outlined"><a href={checkoutUrl}>{t('products.modal.checkout_button')}</a></Button> {/* Proceder a comprar */}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
