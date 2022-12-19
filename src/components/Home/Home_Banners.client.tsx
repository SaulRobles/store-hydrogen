import React from 'react';
import { Carousel } from 'antd';

const data = {
  en: [
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_web_final_bien.jpg?v=1670887480",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_linea_rosa_vol_1.2_0d4437e0-83dc-4e44-84e2-05fbbd70d921.jpg?v=1664298357",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/3er_banner_ingles.jpg?v=1670617787",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/WEB_P_3.2.1.jpg?v=1660690686",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/5to_baner_ingles.jpg?v=1670617689",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/TRAJES_DE_BANO_Banner_INGLES.jpg?v=1648159440",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/ExtremeEWaistTrainer_copia.png?v=1647373805",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/SHAPEWEAR_Fondo_Blanco.jpg?v=1646349843",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Sportswear_Fondo_Blanco_WEB.jpg?v=1653516806",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Control_BodySuit_f81933e1-8a81-47f6-bde9-8c12f287e457.jpg?v=1644881657",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Waist_Trainer_propuesta_2_ad6798e8-8d50-4f52-ab47-d22bc6137f51.jpg?v=1645031271",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Lenceria_fondo_negro.jpg?v=1644880696",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Sleepwear_propuesta_684eba37-e4ba-4a05-81bf-4ec7f6789af0.jpg?v=1645818290",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/HOURGLASS_INGLES_fondo_negro_WEB.jpg?v=1653516886"
  ],
  es: [
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_principal_espanol.jpg?v=1670617508",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_linea_espanol_rosa_vol_1_780988df-546c-4781-97ca-0bd10debf415.jpg?v=1664298363",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/3er_banner_espanol.jpg?v=1670617798",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/WEB_P_3.2.1.jpg?v=1660690686",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/5to_baner_espanol.jpg?v=1670617698",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/TRAJES_DE_BANO_Banner._ESPANOLjpg.jpg?v=1648159457",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Cinturilla_Extrema.png?v=1647373823",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Banner_Fajas_Moldeadoras_Fondo_Blanco.jpg?v=1646349861",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Deportivos_Fondo_Blanco_WEB.jpg?v=1653516820",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Bodysuit_de_Control_N.jpg?v=1644880696",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Cinturilla_Reloj_de_Arena_propuesta_1.jpg?v=1644880782",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Lenceria_fondo_negro.jpg?v=1644880696",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/Set_de_Pijama_fcad72ae-8daa-4e81-96fb-1aa99166474e.jpg?v=1645818305",
    "https://cdn.shopify.com/s/files/1/0300/5926/6141/files/HOURGLASS_ESPANOL_fondo_negro_WEB.jpg?v=1653516901"
  ]
}

const BannersCarousel: React.FC = ({ lng }) => {

  return (
    <Carousel draggable autoplay={true} arrows={true} fade={true}>
      {(data[lng] || []).map((image, index) => <div><img src={image} alt="" /></div>)}
    </Carousel>
  );
};

export default BannersCarousel;