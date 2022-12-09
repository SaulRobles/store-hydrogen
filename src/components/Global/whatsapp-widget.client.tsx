

export default function Widget() {

  function topPage() {
    scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  return(
    <div className="whatsapp_widget_main_div">
      <a href="https://wa.me/526645756005" target="_blank">
        <i style={{color: "white", fontSize: "2rem"}} className="gold fa-brands fa-whatsapp"></i>
      </a>
      <i onClick={topPage} style={{color: "white", fontSize: "2rem"}} className="gold fa-solid fa-angles-up"></i>
    </div>
  )
}