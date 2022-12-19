import * as React from 'react';
import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import Modal from "../Elements/Modal.client"
import Banner from "../Elements/Banner.client"

import { LoadingFetch } from '../Global/Loadings.client';

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Influencer({ lng, handle }) {
  const [ t, i18n ] = useTranslation();
  const [page, setPage] = React.useState(Number(handle) || 1);
  const [data, setData] = React.useState({data: ''})
  let [loading, setLoading] = React.useState(false);

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  useEffect(() => {
    if(data.data === '') {
      getData(page)
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.history.replaceState({}, "", `/pages/influencers/page=${value}`);
    getData(value);
  };

  const root = 'https://sys.sbc.mx/'
  const api = 'api/v2/shop/influencer/list'
  const url = root + api

  const totalPages = (Math.ceil(data?.data?.total / data?.data?.per_page) || 1)

  const bannerEN = "https://storage.googleapis.com/shop-backend/shopify/influencers/web%20ingles%20-%20INFLUENCERS%20MaribelG.mp4"
  const bannerES = "https://storage.googleapis.com/shop-backend/shopify/influencers/web%20espa%C3%B1ol%20-%20INFLUENCERS%20MaribelG.mp4"

  function searchHandle(e) {
    if(e.type === 'keyup') {
      if(e.key === 'Enter') {
        if(e.target.value === '') {
          getData()
        } else {
          setPage(1)
          getData(1, e.target.value)
        }
      }
    }
  }

  function getData(page = 1, search = '') {
    const listQuery = {
      page: page || 1,
      limit: 12,
      search: search,
      sort: 'asc'
    }
    const params = '?'+ new URLSearchParams(listQuery).toString();

    setLoading(true);
    fetch(url+params)
    .then(res => res.json())
    .then(json => {
      setData({...data, data: json.data})
      setLoading(false)
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      {lng === 'en' ? <Banner src={bannerEN} /> : <Banner src={bannerES} />}
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
          {(data?.data?.items || []).map((influencer, index) => (<Modal key={index} influencer={influencer} index={index}></Modal>))}
        </div>
      }
      <div className='influencers_Pagination_Div'>
        <Pagination count={totalPages} page={page} showFirstButton showLastButton onChange={handleChange} />
      </div>
    </div>
  )
}