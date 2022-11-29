import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import ReactPlayer from 'react-player';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: "60rem",
  height: "40rem"
};

export default function BasicModal({data, lng}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let imgUrl = data[`featured_img_${lng}`]
  let description = data[`description_${lng}`]

  const videoRoot = 'https://www.youtube.com/watch?v='
  let videoUrl = data[`url_${lng}`]

  return (
    <>
      <div className='GarmentCardShadow' onClick={handleOpen} style={{margin: "0.5rem", width: "30rem", height: "15rem"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%"}}>
        <div style={{display: "flex"}}>
          <img src={data.image_product} alt="" style={{width: "8rem", height: "10rem"}}/>
          <div style={{position: "relative"}}>
            <img src={imgUrl} alt="" style={{height: "10rem", borderRadius: "10px", marginLeft: "1rem"}} />
            <span style={{position: "absolute", right: "1rem", bottom: "1rem", color: "white"}}>{data.length}</span>
          </div>
        </div>
        <h2 style={{width: "75%", textAlign: "center", marginTop: "0.5rem"}}>{description}</h2>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ReactPlayer url={videoRoot + videoUrl} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true}/>
        </Box>
      </Modal>
    </>
  );
}