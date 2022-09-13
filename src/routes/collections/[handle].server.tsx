import React from "react"
import { Layout } from "../../components/Global/Layout.server"
import PageMenu from "../../components/Global/Pages-Menu.server"
import { useRouteParams } from "@shopify/hydrogen";
import Body from "../../components/Collections/Collection-Products-Cards.server"

export default function Collection() {
  const { handle } = useRouteParams();

  return(
    <Layout>
      <PageMenu></PageMenu>
      <Body handle={handle}></Body>
    </Layout>
  )
}