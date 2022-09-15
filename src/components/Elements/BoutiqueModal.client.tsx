import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export default function BasicModal({boutique}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const settings = {
    dots: true,
    infinite: boutique?.boutique?.gallery?.length > 2 ? true : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div onClick={handleOpen} className="Boutiques_cards_container">
        {boutique?.boutique?.gallery && <img src={boutique.boutique.gallery[0].url} alt={`Imagen de Boutique de ${boutique.boutique.profile?boutique.boutique.profile.city:''}`} />}
        <div className='Boutiques_cards_Title'>
          <h2>{boutique?.boutique?.profile?boutique.boutique.profile.city:''}</h2>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='Boutique_Modal_Main_Div'>
            {/* Seccion izquierda */}
            <div>
              {/* Slider */}
              <div className='Boutique_Modal_Slider_Div'>
                {/* <Slider {...settings}>
                  {boutique?.boutique?.gallery && boutique?.boutique?.gallery?.map((gallery, index) => {
                    return(
                      <div key={index} className='Boutique_Modal_Slider_Image'>
                        <img className='' src={gallery?.url} alt="" />
                      </div>
                    )
                  })}
                </Slider> */}
              </div>
              {/* Texto y enlace de la la boutique y su instagram */}
              <div>
                {/* Ciudad - Encargado */}
                <div className='Boutique_Modal_City_Owner'>
                  <h2>{boutique?.boutique?.profile?.city}</h2>
                  <h3>{boutique?.boutique?.name}</h3>
                </div>
                {/* Enlace a la pagina de instagram */}
                <div className='Boutique_Modal_Instagram_Div'>
                  <a href={`https://www.instagram.com/${boutique?.boutique?.profile?.instagram}`}>{boutique?.boutique?.profile?.instagram}</a>
                </div>
              </div>
            </div>

            {/* Seccion Derecha (Google map) */}
            {boutique?.boutique?.profile?.iframe_id &&
              <div>
                <iframe src={boutique?.boutique?.profile?.iframe_id} className='Boutique_Modal_Location_Div'></iframe>
              </div>
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
}