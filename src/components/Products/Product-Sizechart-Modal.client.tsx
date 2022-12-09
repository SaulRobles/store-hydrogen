import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({data, lng}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const imgRef = React.useRef(null)

  /* console.log(data) */

  function test(medida) {
    console.log("funcion de prueba")
    medida === 'in' ? imgRef.current.src = data?.url_img_in : imgRef.current.src = data?.url_img_cm
    
  }

  return (
    <div>
      <div className='sizechart_main' onClick={handleOpen}>{t('products.sizechart_button')}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <Box sx={style}>
            <img ref={imgRef} src={data?.url_img_cm} alt="" />
            <div style={{position: "absolute", bottom: "-75px", left: "50%", transform: "translate(-50%, -50%)"}}>
              <button onClick={() => test('cm')} className='sizechart_Button'>CM</button>
              <button onClick={() => test('in')}  className='sizechart_Button'>IN</button>
            </div>
          </Box>
        </>
      </Modal>
    </div>
  );
}
