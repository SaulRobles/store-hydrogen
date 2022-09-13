import { Modal } from 'antd';
import React, { useState } from 'react';
import ReactPlayer from 'react-player'

/* import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

const App: React.FC = ({influencer, index}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: influencer.influencer.gallery.length > 2 ? true : false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
  };

  const styles = {
    height: '50rem',
    backgroundColor: 'black'
  }

  return (
    <>     
      <div key={index} onClick={showModal} className="influencers_card_main_Div">
        {influencer.influencer.gallery && influencer.influencer.gallery[0].type == "video" ? <ReactPlayer url={influencer.influencer.gallery[0].url} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true}/> : <img src={influencer.influencer.gallery[0].url} alt={`Imagen de ${influencer.influencer.profile?influencer.influencer.profile.nickname:''}`} />}
        <h2>{influencer.influencer.profile?influencer.influencer.profile.nickname:''}</h2>
      </div>
      <Modal 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
        centered={true}
        bodyStyle={styles}
        width="100rem"
        footer={null}>
        <div className='Influencer_Slider_Div'>
          {/* <Slider {...settings}>
            {influencer.influencer.gallery && influencer.influencer.gallery.map((gallery, index) => {
              return(
                <div key={index} className='Influencer_Slider_Card'>
                  {gallery.type === 'video' ? <ReactPlayer className="Influencer_Slider_item" url={gallery.url} loop={true} volume={0} muted={true} width="100%" height="100%" controls={true} /> : <img className='Influencer_Slider_item' src={gallery.url} alt="" />}
                </div>
              )
            })}
          </Slider> */}
        </div>
      </Modal>
    </>
  );
};

export default App;