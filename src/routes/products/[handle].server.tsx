import React from "react";
import { Layout } from "../../components/Global/Layout.server"
import { useRouteParams } from "@shopify/hydrogen";
import Product from "../../components/Products/Products.server"

export default function Collection() {
  const { handle } = useRouteParams();

  return(
    <Layout>
      <Product handle={handle}></Product>
    </Layout>
  )
}

