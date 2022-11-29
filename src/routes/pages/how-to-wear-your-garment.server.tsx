import { Layout } from "../../components/Global/Layout.server";
import GarmentQuery from "../../components/Garment/Garment.server";

export default function Measure() {

  return (
    <Layout>
      <GarmentQuery></GarmentQuery>
    </Layout>
  )
}