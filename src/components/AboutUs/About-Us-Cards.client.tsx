import React from "react";

export default function Card({information}) {
  
  return (
    <div className="col-sm-12 col-md-6 col-xl-3">
      <div className="AboutUs_card-wrap">
        <div className="AboutUs_card-header">
          <div className="AboutUs_mask-header"></div>
          <img src={information.src} alt={information.alt}/>
          <h3>{information.title}</h3>
        </div>
        <div className="AboutUs_card-content">
          <div className="AboutUs_text-scroll">
            <p dangerouslySetInnerHTML={{__html: information.text}}></p>
          </div>
        </div>
      </div>
    </div>
  )
}