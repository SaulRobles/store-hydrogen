import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import Carousel from "../Influencers/influencer_carousel.client"

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

export default function BasicModal({influencer, index}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div key={index} onClick={handleOpen} className="influencers_card_main_Div">
        {influencer.influencer.gallery && influencer.influencer.gallery[0].type == "video" ? <ReactPlayer url={influencer.influencer.gallery[0].url} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true}/> : <img src={influencer.influencer.gallery[0].url} alt={`Imagen de ${influencer.influencer.profile?influencer.influencer.profile.nickname:''}`} />}
        <h2>{influencer.influencer.profile?influencer.influencer.profile.nickname:''}</h2>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div>
          <Carousel data={influencer}></Carousel>
        </div>
        </Box>
      </Modal>
    </div>
  );
}