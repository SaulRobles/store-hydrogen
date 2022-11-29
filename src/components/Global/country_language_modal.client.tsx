import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper'
};

export default function GlobalModal({language}) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(language)
    lngflag = true;
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{padding: "3px", background: "linear-gradient(90deg,#b8a283 0,#fbf0b9 14%,#8c847b 36%,#ffffab 60%,#8c837a 75%,#faefb9 100%)"}}>
            <div style={{background: "white", padding: "1rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
              <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/logo_negro_sbc.png" width="25%"/>
              <h2 style={{marginTop: "2rem", fontSize: "1.5rem"}} id="modal_greetings">{t('global_modal.greeting')}</h2>
              <h3 className="modal_country_label" style={{fontWeight: "bold", margin: "1rem 0"}}>País/Country</h3>
              <div style={{display: "flex", justifyContent: "space-evenly", width: "100%", margin: "1rem 0"}}>
                <div style={{width: "6rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <img id="mx_flag" src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/mx.svg" alt="Mexican Flag" style={{width: "100px"}} />
                  <h4>México</h4>
                </div>
                <div style={{width: "6rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/us.svg" alt="USA Flag" style={{width: "100px"}}/>
                  <h4>EEUU & International</h4>
                </div>
              </div>
              <hr className='hr_divider' style={{margin: "1rem"}}/>
              <h3 style={{margin: "1rem 0", marginBottom: "2rem", fontWeight: "bold"}}>Idioma/Language</h3>
              <div className='GlobalModal_Buttons_Wrapper'>
                <button className='GlobalModal_Buttons' onClick={handleClose}>Ver sitio en español</button>
                <button className='GlobalModal_Buttons' onClick={handleClose}>Go to site in english</button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}