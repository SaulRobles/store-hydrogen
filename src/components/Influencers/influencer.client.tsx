import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import Modal from "../Elements/Modal.client"
import Banner from "../Elements/Banner.client"

import {fetchSync} from '@shopify/hydrogen';
import {Suspense} from 'react';

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function Influencer({ lng, handle }) {
  const [ t, i18n ] = useTranslation();
  const [page, setPage] = React.useState(Number(handle));

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
  const params = '?'+new URLSearchParams(listQuery).toString();
  const url = root + api

  const {data} = fetchSync(url+params).json();

  const totalPages = Math.ceil(data.total / data.per_page)

  const banner = `https://storage.googleapis.com/shop-backend/shopify/influencers/banner_web_${lng}.mp4`

  return (
    <div>
      <Banner src={banner} />
      <div className='influencers_title_wrapper'>
        <h1 className='influencers_title'>{t("influencers.title")}</h1>
        <span className='influencers_subtitle'>{t("influencers.subtitle")}</span>
      </div>
      <hr className='hr_divider'/>
      <Suspense fallback="Loading...">
        <div className="influencers_wrapper">
          {data && data.items?.map((influencer, index) => (<Modal key={index} influencer={influencer} index={index}></Modal>))}
        </div>
      </Suspense>
      <div className='influencers_Pagination_Div'>
        <Pagination count={totalPages} page={page} color="secondary" showFirstButton showLastButton onChange={handleChange} />
      </div>
    </div>
  )
}