import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { fetchSync } from "@shopify/hydrogen";

import ReactPlayer from 'react-player';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 700,
  bgcolor: '#000',
  border: '2px solid #000',
  boxShadow: 24
};

import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

export default function measureVideo({lng, videoID}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const root = 'https://sys.sbc.mx/';
  const api = 'api/v2/shop/video';
  const url = root + api;

  let videoElement  = {};

  const {data} = fetchSync(url).json();

  if(data) {
    data?.forEach(element => {
      /* console.log("video element")
      console.log(element) */
      videoElement = element
    });
  }

  

  const videoRoot = 'https://www.youtube.com/watch?v='
  let videoUrl = `url_${lng}`

  return (
    <div>
      <div style={{cursor: "pointer"}} onClick={handleOpen} className='Calculator_Video_Div'>
        <div className='Calculator_Video_Text'>{t("products.calculator.video_text")}</div>
        <div><img className='Calculator_Video_Img' src="https://cdn.shopify.com/s/files/1/0300/5926/6141/t/14/assets/play_gold_small.png?v=170938147072388996601655939769" alt="Golden Play Image" /></div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReactPlayer url={videoRoot + videoElement[videoUrl]} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true}/>
        </Box>
      </Modal>
    </div>
  );
}