import Modal from "./GarmentModal.client"

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Garment({data, lng}) {
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  return (
    <div>
      {lng === 'en' ? <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/garment_en.webp?v=1668642263" alt="" /> : <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/garment_es.webp?v=1668642268" />}
      <h1 style={{textAlign: "center", fontSize: "3rem", margin: "2rem 0", fontWeight: "bold"}}>{t("how_to_garment.title")}</h1>
      <hr className='hr_divider' style={{marginTop: "0"}}/>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {data?.map((garment) => <Modal data={garment} lng={lng}></Modal>)}
      </div>
    </div>
  )
}