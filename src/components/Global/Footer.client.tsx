let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Footer({language}) {
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(language)
    lngflag = true;
  }

  return(
    <div className="Footer_Container">
      <div className="Footer_Data">
        <div className="Footer_App">
          <p style={{fontSize: "1.5rem"}}>{t('footer.first_column.download')}</p>
          <p style={{fontSize: "1.5rem"}}>{t('footer.first_column.our_app')}</p>
          <div style={{display: "flex", marginTop: "2rem", justifyContent: "space-between", width: "10rem"}}>
            <a href="https://apps.apple.com/mx/app/sol-beauty-and-care/id1545433555" target="__blank"><i className="fa-brands fa-apple fa-4x gold"></i></a>
            <a href="https://play.google.com/store/apps/details?id=com.solbeautyandcareApp.shop" target="__blank"><i className="fa-brands fa-android fa-4x gold"></i></a>
          </div>
        </div>
        <div className="Footer_Form">
          <span style={{fontWeight: "500"}}>{t('footer.second_column.we_want_to_read_you')}</span>
          <br />
          <form action="">
            <input placeholder={t('footer.second_column.email')} style={{height: "2rem", borderRadius: "2px"}} type="text" />
            <br />
            <textarea placeholder={t('footer.second_column.message')} style={{resize: "none", borderRadius: "5px"}} name="" id="" cols="30" rows="5"></textarea>
            <br />
            <button>{t('footer.second_column.send')}</button>
          </form>
        </div>
        <div className="Footer_Contact">
          <span><strong>{t('footer.three_column.contact_us')}</strong></span>
          <a href="mailto:info@solbeautyandcare.com"><strong className="gold">info@solbeautyandcare.com</strong></a>
          <a href="mailto:cambios@solbeautyandcare.com"><strong className="gold">cambios@solbeautyandcare.com</strong></a>
          <span>{t('footer.three_column.office_hours')}</span>
          <span><strong>{t('footer.three_column.days')}</strong></span>
          <span>8:00am - 5:00pm PST</span>
          <span><strong>{t('footer.three_column.phone')}</strong></span>
          <span>USA Toll Free: <a href="tel:8003876827" className="gold">(800) 387 6827</a></span>
          <span>México: <a href="tel:8009531336" className="gold">(800) 953 1336</a></span>
          <span>USA SD: <a href="tel:+16197357575" className="gold">+1 (619) 735 7575</a></span>
          <span>WhatsApp: <a href="https://api.whatsapp.com/send?phone=526644149190" className="gold">+52 (664) 414 9190</a></span>
        </div>
        <div className="Footer_Help">
          <span><strong>{t('footer.four_column.help_center')}</strong></span>
          <a href="/collections/all" className="gold">{t('footer.four_column.our_products')}</a>
          <a href="/pages/ayuda-1" className="gold">{t('footer.four_column.faqs')}</a>
          <a href="/pages/ayuda-1" className="gold">{t('footer.four_column.exchanges')}</a>
          <br />
          <span><strong>LEGAL:</strong></span>
          <a href="/pages/terminos-y-condiciones" className="gold">{t('footer.four_column.terms')}</a>
          <a href="/pages/aviso-privacidad" className="gold">{t('footer.four_column.privacy')}</a>
        </div>
        <div className="Footer_Networks">
          <span>{t('footer.five_column.our_networks')}</span>
          <div className="Footer_Social_Icons">
            <a href="https://www.instagram.com/solbeautyandcare" target="__blank"><i className="fa-brands fa-instagram fa-lg gold"></i></a>
            <a href="https://www.facebook.com/SolBeautyandCare" target="__blank"><i className="fa-brands fa-square-facebook fa-lg gold" style={{marginLeft: "1rem"}}></i></a>
            <a href="https://wa.me/526644149190" target="__blank"><i className="fa-brands fa-square-whatsapp fa-lg gold" style={{marginLeft: "1rem"}}></i></a>
            <a href="https://www.tiktok.com/@solbeautyandcare" target="__blank"><i className="fa-brands fa-tiktok fa-lg gold" style={{marginLeft: "1rem"}}></i></a>
          </div>
          <span style={{margin: "1rem 0"}}>{t('footer.five_column.language')}</span>
          <div  className="Help_Language_Country_Container">
            <a href="">EN</a>
            <a href="">ES</a>
          </div>
          <span style={{margin: "1rem 0"}}>{t('footer.five_column.country')}</span>
          <div className="Help_Language_Country_Container">
            <a href="">MX</a>
            <a href="">US</a>
          </div>
        </div>
      </div>
      <div className="Footer_Policy">
        <span>Use of the products sold on this website is under the sole responsibility of the user Sol Beauty and Care ™ © 2021. All rights reserved.</span>
      </div>
    </div>
  )
}