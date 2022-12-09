import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { fetchSync } from "@shopify/hydrogen";
import VideoModal from "./Calculator-Measure-Video-Modal.client"

type Anchor = 'top' | 'left' | 'bottom' | 'right';

import '../../i18n';
import { useTranslation } from 'react-i18next';
let lngflag = false;

export default function Calculator({lng, query, product}) {
  const [state, setState] = React.useState({right: false});
  let [error, setError] = React.useState(false)
  const [form, setForm] = React.useState({hip: 115, waist: 90, measure_type: 'cm', size_guide: query, es: 'es'})
  const [measure, setMeasure] = React.useState(0)

  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const url = "https://ws.solbeautyandcare.com";
  const api = "/size/datasets/meta-field/"
  const data = fetchSync(url + api + query).json()
  
  const calculateUrl = "https://ws.solbeautyandcare.com/size/predict/"

  function cleanError() {
    setError(false)
    setMeasure(0)
  }

  function selectOnchangeHandle(e) {
    const auxWaist = form.waist
    const auxHip = form.hip
    let waist: number = 0;
    let hip: number = 0;
    if(e.target.value === "cm") {
      /* console.log("Unidad en Cm:")   */
      waist = Number((auxWaist * 2.54).toFixed(2))
      hip = Number((auxHip * 2.54).toFixed(2))
    } else {
      /* console.log("Unidad en In:") */
      waist = Number((auxWaist * 0.393701).toFixed(2))
      hip = Number((auxHip * 0.393701).toFixed(2))
    }
    setForm({...form, measure_type: e.target.value, waist, hip})
  }

  function measureInputHandle(e) {
    /* console.log("Measure Input:")
    console.log(e.target.value)
    console.log(e.target.value ? true : false) */
    const aux = e.target.value ? Number(e.target.value).toFixed(2) : 0;
    setForm({...form, [e.target.name]: aux})
  }

  function sendForm() {
    /* console.log("Envio de formulario") */
    fetch(calculateUrl, {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if(res.status !== 200) {
        /* console.log("No es un status 200:")
        console.log(res.status) */
        setError(true);
      }
      return res.json();
    }).then((res) => {
      /* console.log(res) */
      if(res?.size) setMeasure(res?.size)
    }).catch((err) => {
      /* console.log("catch del form:")
      console.log(err) */
    })
  }

  /* console.log(form)
  console.log(product) */

  let videoID = product?.metafields[3]?.value

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const body = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1000 }}
      onClick={cleanError}
      onKeyDown={cleanError}
    >
      <div className='Calculator_Main_Div'>
        <img style={{width: "7%"}} src="https://cdn.shopify.com/s/files/1/0300/5926/6141/files/LOGO_DORADO_SOL_Mesa_de_trabajo_1.png?v=1657151374" alt="Logo SolBeautyAndCare" />
        <h2 className='Calculator_title'>{t("products.calculator.title")}</h2>
        <hr style={{margin: "0.5rem 0"}} className='hr_divider'/>
        <h3 className='Calculator_subtitle'>{t("products.calculator.measures")}</h3>
        <h4>{t("products.calculator.comment")}</h4>
        {/* video */}
        <VideoModal lng={lng} videoID={videoID} />
        <hr style={{margin: "2rem 0", width: "80%"}}/>
        {/* Medida */}
        <div style={{display: "flex", margin: "0.5rem 0"}}>
          <img style={{width: "50px", height: "50px"}} src="https://cdn.shopify.com/s/files/1/0300/5926/6141/t/14/assets/ruler_small.png?v=38215452587227283011655939761" alt="" />
          <div className='Calculator_Measure_Data_Div'>
            <label className='Calculator_Measure_Data_Label' htmlFor="measure">{t("products.calculator.measure_unit")}</label>
            <select onChange={selectOnchangeHandle} name="measure" id="measure" style={{backgroundColor: "lightgray", height: "2rem", padding: "1px 0px 5px 10px", fontSize: "1.3rem"}}>
              <option value="cm">{t("products.calculator.cm")}</option>
              <option value="in">{t("products.calculator.in")}</option>
            </select>
          </div>
        </div>
        {/* Cintura */}
        <div style={{display: "flex", margin: "0.5rem 0"}}>
          <img style={{width: "20%"}} src="https://cdn.shopify.com/s/files/1/0300/5926/6141/t/14/assets/waist_small.png?v=66897675781389265371655939771" alt="" />
          <div className='Calculator_Measure_Data_Div'>
            <label className='Calculator_Measure_Data_Label' htmlFor="waist"><span style={{color: "red"}}>*</span>{t("products.calculator.waist")}</label>
            <input onClick={cleanError} onInput={measureInputHandle} className='Calculator_Measure_Data_Input' type="number" name='waist' id='waist' value={form.waist.toFixed(2)} min="0"/>
          </div>
        </div>
        {/* Cadera */}
        <div style={{display: "flex", margin: "0.5rem 0"}}>
          <img style={{width: "20%"}} src="https://cdn.shopify.com/s/files/1/0300/5926/6141/t/14/assets/hip_small.png?v=46385642286056346521655939766" alt="" />
          <div className='Calculator_Measure_Data_Div'>
            <label className='Calculator_Measure_Data_Label' htmlFor="hip"><span style={{color: "red"}}>*</span>{t("products.calculator.hip")}</label>
            <input onClick={cleanError} onInput={measureInputHandle} className='Calculator_Measure_Data_Input' type="number" name='hip' id='hip' value={form.hip.toFixed(2)} min="0"/>
          </div>
        </div>
        {/* Error */}
        {error && <span style={{margin: "1rem 4rem"}}>{t("products.calculator.size_error")}</span>}
        <h3 style={{fontWeight: "700", fontSize: "30px", lineHeight: "40px", letterSpacing: "0px", margin: "1rem 0"}}>{t("products.calculator.ideal_size")}</h3>
        <button onClick={sendForm} style={{margin: "1rem 0"}} className='sizechart_main'>{measure !== 0 ? measure : t("products.calculator.calculate_button")}</button>
        <h5>{t("products.calculator.last_comment")}</h5>
        <div>
          <i className="fa-brands fa-whatsapp"></i>
          <a href={t("products.assistance_link")} target="_blank"><strong> 664 575 6005</strong></a>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='sizechart_main' onClick={toggleDrawer(anchor, true)}>{t("products.calculator_button")}</div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {body(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
