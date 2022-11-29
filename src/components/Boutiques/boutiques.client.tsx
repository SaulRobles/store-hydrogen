import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import Modal from "../Elements/BoutiqueModal.client"
import Banner from "../Elements/Banner.client"

import {fetchSync} from '@shopify/hydrogen';
import {Suspense} from 'react';

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Boutiques({lng, handle}) {
  const [ t, i18n ] = useTranslation();
  const [page, setPage] = React.useState(Number(handle) || 1);

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const listQuery = {
    page: page || 1,
    limit: 20,
    search: '',
    sort: 'asc'
  }

  const root = 'https://sys.sbc.mx/'
  const api = 'api/v2/shop/boutique/list'
  const params = '?'+new URLSearchParams(listQuery).toString();
  const url = root + api

  const {data} = fetchSync(url+params).json();

  const totalPages = Math.ceil(data.total / data.per_page)

  return(
    <>
      <Banner src={"https://cdn.shopify.com/s/files/1/0300/5926/6141/files/banner_web_1920_x_911_4.mp4?v=1643822193"}></Banner>
      <h1 className='Boutique_Title'>{t("boutiques.title")}</h1>
      <hr className='hr_divider'/>
      <div className='boutique_Subtitle_Div'>
        <h3 className='Boutique_Subtitle'>{t("boutiques.subtitle")}</h3>
      </div>
      <Suspense fallback="Loading...">
        <div className="Boutiques_card_wrapper">
          {data && data.items?.map((boutique, index) => {
            if(boutique.status !== "Empty") return(<Modal key={index} boutique={boutique} lng={lng} />)
          })}
        </div>
      </Suspense>
      <div className='influencers_Pagination_Div'>
        <Pagination count={totalPages} page={page} color="secondary" showFirstButton showLastButton onChange={handleChange} />
      </div>
    </>
  )
}