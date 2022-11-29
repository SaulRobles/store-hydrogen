let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Contact({lng}) {
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  return (
    <>
      <h1 className='page_title'>{t("contact.title")}</h1>
      <hr className="hr_divider" style={{marginTop: "1rem"}}/>

      {/* Aviso / Warning */}
      <h3 style={{textAlign: "center", fontSize: "2rem"}}>{t("contact.title_warning")}</h3>
      <p style={{textAlign: "center", padding: "0 5rem"}}>{t("contact.warning")}</p>

      {/* Form */}
      <div className="Contact_Form_Wrapper">
        <form action="" className="Contact_Form_Main">
          <div className="Contact_Form_Input_TextArea">
            <div className="Contact_Form_Input_Div">
              <input className='Contact_inputs_placeholder' placeholder={t("contact.input_name")} style={{backgroundColor: "#0000001a", padding: "0.5rem"}} type="text" name="" id="" />
              <input className='Contact_inputs_placeholder' placeholder={t("contact.input_order")} style={{backgroundColor: "#0000001a", padding: "0.5rem"}} type="text" name="" id="" />
              <input className='Contact_inputs_placeholder' placeholder={t("contact.input_mail")} style={{backgroundColor: "#0000001a", padding: "0.5rem"}} type="text" name="" id="" />
              <input className='Contact_inputs_placeholder' placeholder={t("contact.input_phone")} style={{backgroundColor: "#0000001a", padding: "0.5rem"}} type="text" name="" id="" />
            </div>
            <div className="Contact_Form_TextArea_Div">
              <textarea className='Contact_inputs_placeholder' placeholder={t("contact.textarea_message")} style={{backgroundColor: "#0000001a", resize: "none"}} name="" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="Contact_Form_Buttons_Div">
            <button>{t("contact.button_mail")}</button>
            <button>{t("contact.button_whatsapp")}</button>
          </div>
        </form>
      </div>

      <div className="Contact_Cards_Wrapper">
        {/* Chat */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/chat_globe.png?v=1668791874" alt="" />
          <p className='contact_Cards_Title'>{t("contact.chat_title")}</p>
          <p className="Contact_Cards_Text" style={{fontWeight: "600"}}>
            <span>{t("contact.chat_description")}</span>
            <span>{t("contact.chat_description2")}</span>
          </p>
        </div>
        {/* Email */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/mail_icon_560a4664-9438-465a-b089-8df0922f0644.png?v=1668792430" alt="" />
          <p className='contact_Cards_Title'>{t("contact.mail_title")}</p>
          <span className="Contact_Cards_Text" style={{fontWeight: "600"}}>
            <a className='gold' href="">info@solbeautyandcare.com</a>
            <a className='gold' href="">cambios@solbeautyandcare.com</a>
          </span>
        </div>
        {/* Service Hours */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/clock_icon_c677af7f-72d5-45db-a186-7fe1e07117ad.png?v=1668792571" alt="" />
          <p className='contact_Cards_Title'>{t("contact.hour_title")}</p>
          <p className="Contact_Cards_Text" style={{fontWeight: "600"}}>
            <span>{t("contact.hour_description")}</span>
            <span>8:00 AM - 4:00 PM PST</span>
          </p>
        </div>
        {/* Telefono */}
        <div className="Contact_Cards_Main_Div">
          <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/phone_icon_e2f74bae-f3ff-429d-a8d7-5a50cdef59fc.png?v=1668792816" alt="" />
          <p className='contact_Cards_Title'>{t("contact.phone_title")}</p>
          <span className="Contact_Cards_Text" style={{fontWeight: "600"}}>
            <a className='gold' href="">USA: (510) 592 5164</a>
            <a className='gold' href="">México: (664) 414 9614</a>
            <a className='gold' href="">WhatsApp: +52 (664) 575 6005</a>
          </span>
        </div>
      </div>
      
      <img src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/LOGO_DORADO_SOL_Mesa_de_trabajo_1.png?v=1657151374" alt="Logo de Sol Beauty and Care" style={{width: "10%", margin: "auto"}} />
    </>
  )
}