import { Layout } from "../../components/Global/Layout.server"
import PageMenu from "../../components/Global/Pages-Menu.server"

export default function Collection() {

  return(
    <Layout>
      <PageMenu></PageMenu>
      <div>Collections</div>
    </Layout>
  )
}