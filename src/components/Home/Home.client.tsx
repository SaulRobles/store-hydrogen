import {ProductCarousel, CollectionCarousel} from "./Home_Carousel.client";
import Videos from "./Home_Videos.client"

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Home({ collection, nuevos, destacados, wanted, lng }){
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const collectionArray = collection?.data?.collections?.nodes
  const nuevosArray = nuevos?.data?.collection?.products?.nodes
  const destacadosArray = destacados?.data?.collection?.products?.nodes
  const wantedArray = wanted?.data?.collection?.products?.nodes

  const nuevosUrl = `/collections/${nuevos?.data?.collection?.handle ? nuevos?.data?.collection?.handle : ''}`
  const destacadosUrl = `/collections/${destacados?.data?.collection?.handle ? destacados?.data?.collection?.handle : ''}`
  const wantedUrl = `/collections/${wanted?.data?.collection?.handle ? wanted?.data?.collection?.handle : ''}`

  return (
    <div>
      {/* Lo mas nuevo */}
      <hr className="hr_divider"/>
      <a className="Home_Anchoar_Title" href={nuevosUrl} ><h2>{t("home.new_releases")}</h2></a>
      <h3 className="Home_Subtitle">{t("home.new_releases_subtitle")}</h3>
      <div style={{margin: "0 20rem"}}>
        <ProductCarousel array={nuevosArray}/>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <a className="Home_Buttons" href={nuevosUrl}><button>{t("home.new_releases_button")}</button></a>
      </div>
      {/* Colecciones */}
      <hr className="hr_divider"/>
      <h2 style={{fontSize: "24px"}} className="Home_Subtitle">{t("home.categories")}</h2>
      <h3 className="Home_Subtitle">{t("home.categories_subtitle")}</h3>
      <CollectionCarousel array={collectionArray}/>
      {/* Destacados / favorites */}
      <hr className="hr_divider"/>
      <div style={{display: "flex", justifyContent: "center"}}>
        <a className="Home_White_Button" href={destacadosUrl}><button>{t("home.favorites")}</button></a>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem 0"}}>
        <h3 style={{fontSize: "30px", fontWeight: "200", lineHeight: "normal", fontFamily: "Hind,sans-serif"}}>{t("home.favorites_subtitle")}</h3>
        <h3><strong style={{fontSize: "30px", fontWeight: "600", fontStyle: "italic", fontFamily: "Hind,sans-serif"}}>{t("home.favorites_subtitle_2")}</strong></h3>
      </div>
      <div style={{margin: "0 20rem"}}>
        <ProductCarousel array={destacadosArray}/>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <a className="Home_Buttons" href={destacadosUrl}><button>{t("home.favorites_button")}</button></a>
      </div>
      {/* Lo mas buscado / The most wanted */}
      <hr className="hr_divider"/>
      <a className="Home_Anchoar_Title" href={wantedUrl}><h2>{t("home.wanted")}</h2></a>
      <h3 className="Home_Subtitle">{t("home.wanted_subtitle")}</h3>
      <div style={{margin: "0 20rem"}}>
        <ProductCarousel array={wantedArray}/>
      </div>
      <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <a className="Home_Buttons" href={wantedUrl}><button>{t("home.wanted_button")}</button></a>
      </div>
      {/* Videos */}
      <hr className="hr_divider"/>
      <div style={{display: "flex", justifyContent: "center"}}>
        <a style={{marginBottom: "2.5rem"}} className="Home_White_Button"><button className="Home_White_Button">VIDEOS</button></a>
      </div>
      <Videos></Videos>
      <div style={{display: "flex", justifyContent: "center", marginTop: "3rem"}}>
        <a className="Home_Buttons" href=""><button style={{width: "22rem", height: "2.5rem"}}>{t("home.videos_button")}</button></a>
      </div>
      {/* History */}
      <hr className="hr_divider"/>
      <div style={{display: "flex", justifyContent: "center", marginBottom: "7rem"}}>
        <div style={{width: "42rem", margin: "0 5rem"}}>
          <h2 style={{fontSize: "45px", lineHeight: "51px", padding: "0 0 25px 0", fontWeight: "700", fontFamily: "Hind,sans-serif"}}>{t("home.history_title")}</h2>
          <h4 style={{textAlign: "justify", fontSize: "22px", lineHeight: "35px", fontWeight: "400", color: "#777777", fontFamily: "Hind,sans-serif"}} dangerouslySetInnerHTML={{__html: t("home.history_body")}}></h4>
          <h4 style={{textAlign: "justify"}}></h4>
          <div style={{display: "flex", justifyContent: "flex-start", marginTop: "3rem"}}>
            <a className="Home_Buttons" href=""><button style={{margin: "0px", height: "2.4rem"}}>{t("home.history_button")}</button></a>
          </div>
        </div>
        <div>
          <img style={{width: "30rem", boxShadow: "0 0 14px -2px #000000bf"}} src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/SolConCorona.png?v=1647031297" alt="Sol Leon con corona" />
        </div>
      </div>
      <hr style={{marginBottom: "0rem"}} className="hr_divider"/>
    </div>
  )
}