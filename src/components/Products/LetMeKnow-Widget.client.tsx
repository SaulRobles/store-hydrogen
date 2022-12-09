import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "5px"
};

export default function BasicModal({ product, childrens }) {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(true)
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  

  console.log(product)
  console.log(childrens)

  const variants = product?.variants?.nodes?.filter((variant) => !variant.availableForSale)

  function buttonHandle(e, bool) {
    console.log(e)
    setType(bool)
  }

  return (
    <div>
      <div onClick={handleOpen} className="LetMeKnow_Widget_Main_Div">
        <div className="LetMeKnow_Text_Div">Let me know when it's available</div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h2 style={{fontSize: "22px", lineHeight: "1.42857143", fontWeight: "500"}}>Let me know when it's available</h2>
            <p style={{fontSize: "14px", lineHeight: "1.42857143"}}>We will send you a notification as soon as the product is available again.</p>
          </div>
          <hr style={{marginTop: "20px", marginBottom: "20px", border: "0", borderTop: "1px solid #eeeeee"}}/>
          <div>
            <h4 style={{marginBottom: "20px", fontWeight: "500", fontSize: "18px", marginTop: "10px"}}>{product?.title}</h4> {/* Producto */}
            <select name="" id="" className='LetMeKnow_Input'>
              {variants && variants.map((ele) => <option value={ele.sku}>{ele.title}</option>)}
              <option value=""></option> {/* Medida de los productos */}
            </select>
            <div style={{display: "table", width: "100%", tableLayout: "fixed", borderCollapse: "separate", verticalAlign: "middle", margin: "1rem 0"}} >
              <button onClick={(e) => buttonHandle(e, true)} style={{width: "50%", color: "white", backgroundColor: "black", borderRadius: "5px 0 0 5px", height: "2rem"}}>Email</button>
              <button onClick={(e) => buttonHandle(e, false)} style={{width: "50%", color: "black", backgroundColor: "#e6e6e6", borderRadius: "0 5px 5px 0", borderColor: "#adadad", height: "2rem"}}>SMS</button>
            </div>
            <div>
              {type && <input placeholder='E-mail' className='LetMeKnow_Input' type="text" />}
              {!type && <input className='LetMeKnow_Input' type="text" />}
            </div>
            {/* Messenger Notification */}
            <span style={{fontWeight: "bold", fontSize: "12px", margin: "10px 0", fontWeight: "500"}}>Click to receive notifications on Facebook Messenger</span>
            {/* Button de msn */}
            <button style={{backgroundColor: "#1877f2", color: "white", padding: "0.3rem", borderRadius: "5px", height: "2rem", fontSize: "14px"}}>
              <i className="fa-brands fa-facebook-messenger"></i>
              <span> Get this in Messenger</span>
            </button>
            <button style={{width: "100%", backgroundColor: "black", color: "white", height: "3rem", borderRadius: "5px", fontWeight: "500", margin: "1rem 0"}}>Let me know</button>
            <p style={{opacity: "0.835", fontSize: "13px", lineHeight: "150%"}}>We will respect your privacy and will not share your email with anyone.</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}