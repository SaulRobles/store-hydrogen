import React from "react";

export default function Footer() {

  return(
    <div className="Footer_Container">
      <div className="Footer_Data">
        <div className="Footer_App">
          <p style={{fontSize: "1.5rem"}}>DOWNLOAD</p>
          <p style={{fontSize: "1.5rem"}}>OUR APP</p>
          <div style={{display: "flex", marginTop: "2rem", justifyContent: "space-between", width: "10rem"}}>
            <a href="https://apps.apple.com/mx/app/sol-beauty-and-care/id1545433555" target="__blank"><i className="fa-brands fa-apple fa-4x gold"></i></a>
            <a href="https://play.google.com/store/apps/details?id=com.solbeautyandcareApp.shop" target="__blank"><i className="fa-brands fa-android fa-4x gold"></i></a>
          </div>
        </div>
        <div className="Footer_Form">
          <span style={{fontWeight: "500"}}>WE WANT TO READ YOU</span>
          <br />
          <form action="">
            <input placeholder="E-MAIL:" style={{height: "2rem", borderRadius: "2px"}} type="text" />
            <br />
            <textarea placeholder="MESSAGE:" style={{resize: "none", borderRadius: "5px"}} name="" id="" cols="30" rows="5"></textarea>
            <br />
            <button>Send</button>
          </form>
        </div>
        <div className="Footer_Contact">
          <span><strong>CONTACT US:</strong></span>
          <a href="mailto:info@solbeautyandcare.com"><strong className="gold">info@solbeautyandcare.com</strong></a>
          <a href="mailto:cambios@solbeautyandcare.com"><strong className="gold">cambios@solbeautyandcare.com</strong></a>
          <span>Office hours:</span>
          <span><strong>Monday to Friday</strong></span>
          <span>8:00am - 5:00pm PST</span>
          <span><strong>Phone:</strong></span>
          <span>USA Toll Free: <a href="tel:8003876827" className="gold">(800) 387 6827</a></span>
          <span>México: <a href="tel:8009531336" className="gold">(800) 953 1336</a></span>
          <span>USA SD: <a href="tel:+16197357575" className="gold">+1 (619) 735 7575</a></span>
          <span>WhatsApp: <a href="https://api.whatsapp.com/send?phone=526644149190" className="gold">+52 (664) 414 9190</a></span>
        </div>
        <div className="Footer_Help">
          <span><strong>HELP CENTER:</strong></span>
          <a href="/collections/all" className="gold">Our products</a>
          <a href="/pages/ayuda-1" className="gold">Frequently asked questions</a>
          <a href="/pages/ayuda-1" className="gold">Exchanges</a>
          <br />
          <span><strong>LEGAL:</strong></span>
          <a href="/pages/terminos-y-condiciones" className="gold">Terms and Conditions</a>
          <a href="/pages/aviso-privacidad" className="gold">Privacy notice</a>
        </div>
        <div className="Footer_Networks">
          <span>OUR NETWORKS</span>
          <div className="Footer_Social_Icons">
            <a href="https://www.instagram.com/solbeautyandcare" target="__blank"><i className="fa-brands fa-instagram fa-lg gold"></i></a>
            <a href="https://www.facebook.com/SolBeautyandCare" target="__blank"><i className="fa-brands fa-square-facebook fa-lg gold" style={{marginLeft: "1rem"}}></i></a>
            <a href="https://wa.me/526644149190" target="__blank"><i className="fa-brands fa-square-whatsapp fa-lg gold" style={{marginLeft: "1rem"}}></i></a>
            <a href="https://www.tiktok.com/@solbeautyandcare" target="__blank"><i className="fa-brands fa-tiktok fa-lg gold" style={{marginLeft: "1rem"}}></i></a>
          </div>
          <span style={{margin: "1rem 0"}}>LANGUAGE</span>
          <div  className="Help_Language_Country_Container">
            <a href="">EN</a>
            <a href="">ES</a>
          </div>
          <span style={{margin: "1rem 0"}}>COUNTRY</span>
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