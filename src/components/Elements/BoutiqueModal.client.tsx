import * as React from 'react';

import Modal from '@mui/material/Modal';
import ReactPlayer from 'react-player';

import { Carousel } from 'antd';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: "24",
  padding: "4",
};

export default function BasicModal({boutique, lng}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let descriptionLanguage = []
  if(boutique?.boutique?.profile?.description){
    descriptionLanguage = boutique?.boutique?.profile?.description.split('|')
  }

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
        <div style={style}>
          <div className='Boutique_Modal_Main_Div'>
            {/* Seccion izquierda */}
            <div>
              {/* Slider */}
              <div className='Boutique_Modal_Slider_Div'>
                <Carousel slidesToShow={1} draggable arrows={true}>
                  {boutique?.boutique?.gallery && boutique?.boutique?.gallery?.map((gallery, index) => {
                    return(
                      <div key={index} className='Boutique_Modal_Slider_Image'>
                        <img className='' src={gallery?.url} alt="" />
                      </div>
                    )
                  })}
                </Carousel>
              </div>
              {/* Texto y enlace de la la boutique y su instagram */}
              <div>
                {/* Ciudad - Encargado - Horarios - Telefonos */}
                <div className='Boutique_Modal_City_Owner'>
                  <h2>{boutique?.boutique?.profile?.city}</h2>
                  <h3>{boutique?.boutique?.name}</h3>
                  {boutique?.boutique?.profile?.description ?  
                    <div className='Boutique_Modal_Information_Div'>
                      <img className='Boutique_Modal_Information_Div_Img' src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/icons8-open-sign-50.png?v=1666291094" alt="" />
                      {lng === 'en' ? <span>{descriptionLanguage[0]}</span> : <span>{descriptionLanguage[1]}</span>}
                    </div> : 
                    <></>
                  }
                  {boutique?.boutique?.profile?.phone ? 
                    <div className='Boutique_Modal_Information_Div'>
                      <img className='Boutique_Modal_Information_Div_Img' src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/icons8-phone-50.png?v=1666285721" alt="" />
                      <span>{boutique?.boutique?.profile?.phone}</span>
                    </div> : <></>
                  }
                  {boutique?.boutique?.profile?.cellphone ?
                    <div className='Boutique_Modal_Information_Div'>
                      <img className='Boutique_Modal_Information_Div_Img' src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/icons8-phone-50.png?v=1666285721" alt="" />
                      <span>{boutique?.boutique?.profile?.cellphone}</span>
                    </div> : <></>
                  }
                  {boutique?.boutique?.profile?.whatsapp ? 
                    <div /* className='Boutique_Modal_Information_Div_Img' */ className='Boutique_Modal_Information_Div'>
                      <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/icons8-whatsapp-24.png?v=1666285726" alt="" />
                      <span>{boutique?.boutique?.profile?.whatsapp}</span>
                    </div> : <></>
                  }
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
        </div>
      </Modal>
    </div>
  );
}

const BoutiqueModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'black',
  border: '2px solid #000',
  boxShadow: "24",
  padding: "4",
  width: "60rem",
  height: "40rem"
};

export function MeasureModal({ data, lng }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const root = 'https://sys.sbc.mx/';

  let title = `description_${lng}`
  let img = `featured_img_${lng}`
  let url = data[img]

  const videoRoot = 'https://www.youtube.com/watch?v='
  let videoUrl = `url_${lng}`

  return (
    <div>
      <div onClick={handleOpen} className='Measure_Card_Main_Div'>
        <div className="Measure_Img_Div">
          <img src={root + url} alt="" />
          <span className="Measure_Card_Time">{data.length}</span>
        </div>
        <h2>{data[title]}</h2>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={BoutiqueModalStyle}>
          <ReactPlayer url={videoRoot + data[videoUrl]} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true}/>
        </div>
      </Modal>
    </div>
  );
}