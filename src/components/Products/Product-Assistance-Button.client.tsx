import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

export default function Assistance({lng}) {
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  return(
      <a className='Assistance_Main_Div' href={t("products.assistance_link")} target="__blank">
        {t("products.assistance_button")}
        <i className="fa-brands fa-whatsapp"></i>
      </a>
  )
}