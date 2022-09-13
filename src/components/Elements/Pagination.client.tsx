import React from 'react';

import {useUrl} from '@shopify/hydrogen';

import Pagination from '@mui/material/Pagination';

export default function App({data}) {
  const {searchParams} = useUrl();
  const page = searchParams.get('page') || 1;

  return (<Pagination count={data.total} page={parseInt(page)} color="secondary" />)
}