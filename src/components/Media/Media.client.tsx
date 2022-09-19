import ArticleTemplate from "../Elements/MediaModal.client"

import Media_es from "../../assets/MediaAndPress/banner_prensa_es.webp";
import Media_en from "../../assets/MediaAndPress/banner_prensa_en.webp";

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Media({data, lng}) {
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  let lngObject = {}
  lngObject.article = t('media_and_press.article_button');
  lngObject.video = t('media_and_press.video_button')

  return (
    <>
      {lng === 'en' ? <img src={Media_en}/>:<img src={Media_es}/>}
      <h1 style={{marginTop: "1rem"}} className="main_title">{t('media_and_press.title')}</h1>
      <hr style={{marginTop: "1rem"}} className="hr_divider"/>
      <div className="Media_Articles_wrapper">
        {data && data.map((article, index) => <ArticleTemplate key={index} data={article} lng={lng} btnText={lngObject}></ArticleTemplate>)}
      </div>
    </>
  )
}