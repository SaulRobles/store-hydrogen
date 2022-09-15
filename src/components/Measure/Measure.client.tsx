import { MeasureModal } from "../Elements/BoutiqueModal.client"

import banner_es from "../../assets/HowToMeasure/como_medirse_es.webp"
import banner_en from "../../assets/HowToMeasure/How_to_measure_yourself_en.webp"
let lngflag = false;
import '../../i18n';
import { useTranslation, Trans } from 'react-i18next';

export default function Measure({data, lng}){
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  return (
    <>
      {lng === 'es' ? <img src={banner_es}/>: <img src={banner_en}/>}
      <h1 style={{padding: "0", marginTop: "2rem"}} className='main_title'>{t("how_to_measure.title")}</h1>
      <hr className="hr_divider"/>
      <div className="Measure_Wrapped">
        {(data || []).map((video, index) => {
          return <MeasureModal key={index} data={video} lng={lng}/>
        })}
      </div>
    </>
  )
}