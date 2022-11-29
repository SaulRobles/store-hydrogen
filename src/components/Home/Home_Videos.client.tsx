import { useState, useRef, useEffect  } from 'react';
import { Carousel } from 'antd';
import ReactPlayer from 'react-player';

export default function ProductGallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const PlayerRefs = useRef(new Array())

  const urlRoot = "https://www.youtube.com/watch?v="

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  function log(index){
    PlayerRefs.current[index].showPreview()
  }

  return (
    <div>
      <Carousel asNavFor={nav2} ref={slider1} dots={false} draggable={true} lazyLoad={"progressive"}>
        {data && data.map((element, index) => {
          return(
            <div key={index}>
              <div style={{padding: "0.5rem"}}>
                <ReactPlayer ref={(ele) => {PlayerRefs.current[index] = ele}} onPause={() => log(index)} light={element.thumb} width="100%" height="30rem" url={urlRoot + element.video}/>
              </div>
            </div>
          )
        })}
      </Carousel>
      <Carousel asNavFor={nav1} ref={slider2} slidesToShow={4} swipeToSlide={true} focusOnSelect={true} dots={false} draggable={true} lazyLoad={"progressive"}>
        {data && data.map((element, index) => {
          return(
            <div key={index}>
              <div style={{padding: "0.5rem"}}>
                <img src={element.thumb} alt="" />
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  );
};

const data = [
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/mini1_98990910-d1c3-49c4-ac62-eff08cdc98a3.jpg?v=1661471636",
    video: "seOpoUCt7gs",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/mini_2.jpg?v=1661471757",
    video: "vUP_PsxzDpA",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/MIni_3_1c7cc5b1-21d8-43d9-a859-5a6d49333e13.jpg?v=1661471821",
    video: "WycbKjrS5aM",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/MINI_4.jpg?v=1661471844",
    video: "K6TIRsvwkF4",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Mini_5.jpg?v=1661471869",
    video: "T4v0Fa4AHUE",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/1_Jeans_Control_Bodysuit.jpg?v=1645833639",
    video: "znWueVzldr4",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/2_Jumpsuit_Anticeluliitico.jpg?v=1645833639",
    video: "6gQHf66_Y6M",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/4_Sol_Swimwear_modelo_SUNSET.jpg?v=1645833639",
    video: "ooiR5zk-PS8",
  },
  {
    thumb: "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/5_El_increible_moldeo_de_nuestro_chaleco.jpg?v=1645833639",
    video: "p5FzuMPI-Cc",
  }
]