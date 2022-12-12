import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import Modal from "../Elements/Modal.client"
import Banner from "../Elements/Banner.client"

import {fetchSync} from '@shopify/hydrogen';

import { LoadingFetch } from '../Global/Loadings.client';

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Influencer({ lng, handle }) {
  const [ t, i18n ] = useTranslation();
  const [page, setPage] = React.useState(Number(handle) || 1);
  const [filter, setFilter] = React.useState({active: false, data: ''})
  let [loading, setLoading] = React.useState(false);

  console.log("WebHook de Filter:")
  console.log(filter)

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const listQuery = {
    page: page || 1,
    limit: 12,
    search: '',
    sort: 'asc'
  }

  const root = 'https://sys.sbc.mx/'
  const api = 'api/v2/shop/influencer/list'
  const params = '?'+ new URLSearchParams(listQuery).toString();
  const url = root + api

  const {data} = fetchSync(url+params).json();

  const totalPages = Math.ceil(data.total / data.per_page)

  const banner = `https://storage.googleapis.com/shop-backend/shopify/influencers/banner_web_${lng}.mp4`

  function searchHandle(e) {
    if(e.type === 'keyup') {
      if(e.key === 'Enter') {
        if(e.target.value === '') {
          setFilter({...filter, active: false, data: ''})
        } else {
          console.log("Es un evento de presionar enter")
          setLoading(true)
          let aux = {...listQuery, search: e.target.value}
          console.log(aux)
          let auxParams = '?' + new URLSearchParams(aux).toString();
          fetch(url+auxParams)
          .then(res => res.json())
          .then(json => {
            setLoading(false)
            setFilter({...filter, active: true, data: json.data})
          })
          .catch(err => console.log(err))
        }
      }
    }
  }

  return (
    <div>
      <Banner src={banner} />
      <div className='influencers_title_wrapper'>
        <h1 className='influencers_title'>{t("influencers.title")}</h1>
        <span className='influencers_subtitle'>{t("influencers.subtitle")}</span>
      </div>
      <hr className='hr_divider'/>
      <div style={{position: "relative"}}>
        <input onKeyUp={searchHandle} type="text" style={{margin: "auto", display: "block", backgroundColor: "#f7f8fa", width: "25rem", paddingLeft: "2rem"}}/>
        <i style={{position: "absolute", left: "47.5rem", top: "5px"}} className="fa-solid fa-magnifying-glass"></i>
      </div>
      {loading ? <LoadingFetch />: 
        <div className="influencers_wrapper">
          {filter.active ? (filter.data?.items || []).map((influencer, index) => (<Modal key={index} influencer={influencer} index={index}></Modal>)) : (data?.items || []).map((influencer, index) => (<Modal key={index} influencer={influencer} index={index}></Modal>)) }
        </div>
      }
      <div className='influencers_Pagination_Div'>
        <Pagination count={totalPages} page={page} showFirstButton showLastButton onChange={handleChange} />
      </div>
    </div>
  )
}