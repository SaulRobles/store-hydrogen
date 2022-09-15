import banner_es from "../../assets/HowToMeasure/como_medirse_es.webp"
import banner_en from "../../assets/HowToMeasure/How_to_measure_yourself_en.webp"
let lngflag = false;
import '../../i18n';
import { useTranslation, Trans } from 'react-i18next';

export default function Measure({data, lng}){
  const [ t, i18n ] = useTranslation();
  const root = 'https://api-sai.solbeautyandcare.com/';
  console.log(data)
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
          let title = `description_${lng}`
          let img = `featured_img_${lng}`
          let url = video[img]
          return (
            <div key={index} className='Measure_Card_Main_Div'>
              <div className="Measure_Img_Div">
                <img src={root + url} alt="" />
                <span className="Measure_Card_Time">{video.length}</span>
              </div>
              <h2>{video[title]}</h2>
            </div>
          )
        })}
      </div>
    </>
  )
}