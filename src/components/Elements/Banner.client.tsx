import React from "react";

export default function Banner({src}) {
  
  return (
    <div className="Banner_Div">
        <video autoPlay muted loop src={src} ></video>
    </div>
  )
}