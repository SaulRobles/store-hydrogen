import React from "react";
import { Layout } from "../../components/Global/Layout.server"
import BoutiquesData from "../../components/Boutiques/boutiques.server"

export default function Boutiques() {

  return (
    <Layout>
      <BoutiquesData></BoutiquesData>
    </Layout>
  )
}