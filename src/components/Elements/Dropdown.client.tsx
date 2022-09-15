import React from "react";

export const LanguageDropdown: React.FC = ({lng}) => {
  let dropDownRef = React.useRef(null)
  let lngValueRef = React.useRef(null)
  let language = lng === 'es' ? 'mx' : 'us'

  function changeSize(){
    dropDownRef.current.classList.toggle('Dropdown_Active');
  }

  function changeLanguage(lng) {
    lngValueRef.current.value = lng
    window.location.reload()
  }

  return (
    <div style={{position: "relative", transition: "all 2s"}}>
      <iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>
      <div>
        <button onClick={changeSize}>
          <img
            src={`https://flagcdn.com/w40/${language}.png`}
            height="40"
          />
        </button>
      </div>
      {/* Dropdown */}
      <div ref={dropDownRef} className="LngDropDown_Main">
        <form target="dummyframe" action="/service/changelanguage" method="post">
          <input style={{display: "none"}} ref={lngValueRef} name="language"/>
          <div style={{display: "none"}}>
            <button onClick={(e) => changeLanguage('es')} style={{display: "flex"}}>
              <img
                src="https://flagcdn.com/w40/mx.png"
                height="40"
                alt="México"
              />
              <span>Spanish</span>
            </button>
          </div>
          <div style={{display: "none"}}>
            <button onClick={(e) => changeLanguage('en')} style={{display: "flex"}}>
              <img
                src="https://flagcdn.com/w40/us.png"
                height="40"
                alt="Estados Unidos"
              />
              <span>English</span>
            </button>
          </div>
        </form>
        
      </div>
    </div>
  )
};