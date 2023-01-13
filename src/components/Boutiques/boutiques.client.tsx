import * as React from 'react';
import { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';

import Modal from "../Elements/BoutiqueModal.client"
import Banner from "../Elements/Banner.client"

import { LoadingFetch } from '../Global/Loadings.client';

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Boutiques({ lng, handle }) {
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
    window.history.replaceState({}, "", `/pages/boutiques/page=${value}`);
    getData(value);
  };

  const root = /* 'https://sys.sbc.mx/' */ 'http://192.168.1.22:3000/'
  const api = 'api/v2/shop/boutique/list'
  const url = root + api

  const totalPages = (Math.ceil(data?.data?.total / data?.data?.per_page) || 1)

  function getData(page = 1) {
    const listQuery = {
      page: page || 1,
      limit: 24,
      search: '',
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

  return(
    <>
      <Banner src={"https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_web_1920_x_911_4.mp4?v=1643822193"}></Banner>
      <h1 className='Boutique_Title'>{t("boutiques.title")}</h1>
      <hr className='hr_divider'/>
      <div className='boutique_Subtitle_Div'>
        <h3 className='Boutique_Subtitle'>{t("boutiques.subtitle")}</h3>
      </div>
      {loading ? <LoadingFetch />: 
        <div className="Boutiques_card_wrapper">
          {(data?.data?.items || []).map((boutique, index) => {
            if(boutique.status !== "Empty") return(<Modal key={index} boutique={boutique} lng={lng} />)
          })}
        </div>
      }
      <div className='influencers_Pagination_Div'>
        <Pagination count={totalPages} page={page} showFirstButton showLastButton onChange={handleChange} />
      </div>
    </>
  )
}