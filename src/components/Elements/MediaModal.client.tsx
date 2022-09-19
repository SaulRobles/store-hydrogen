import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';

let videoStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80rem',
  border: '2px solid #000',
  boxShadow: 24
};

const imgStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80rem',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflowY:'scroll',
}

export default function MediaModal({data, lng, btnText}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let title = `title_${lng}`;
  let description = `description_${lng}`

  const videoRoot = 'https://www.youtube.com/watch?v=';

  data?.featured_video_url ? videoStyle.height = 'auto' : videoStyle.height = '50rem'

  return (
    <div>
      <div className='Media_Article_Main_Div'>
        <div className='Media_Article_img'><img src={data?.featured_image_url} alt="" /></div>
        <div className='Media_Article_Information'>
          <h2 className='Media_Article_Title'>{data[title]}</h2>
          <h4>{data[description]}</h4>
          {data?.youtube_featured_image_url || data?.featured_video_url ? <button className='Media_Article_Button' onClick={handleOpen}><i className="fa-solid fa-play"></i> {btnText.video}</button> : <button className='Media_Article_Button' onClick={handleOpen}>{btnText.article}</button>}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {data?.youtube_featured_image_url || data?.featured_video_url ? 
        <Box sx={videoStyle}>
          <ReactPlayer url={data?.featured_video_url || videoRoot + data?.youtube_video_id} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true}></ReactPlayer>
        </Box> : 
        <Box sx={imgStyle}>
          <img src={data?.screenshot_url}></img>
        </Box>}
      </Modal>
    </div>
  );
}
