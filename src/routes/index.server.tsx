import HomeQuery from "../components/Home/Home.server"
import { Layout } from "../components/Global/Layout.server";
import { useSession } from "@shopify/hydrogen";

import { Suspense } from "react";

export default function Home() {
  const {language} = useSession();

  return (
    <Layout>
      <Suspense fallback="Loading...">
        <HomeQuery lng={language}></HomeQuery>
      </Suspense>
    </Layout>
  )
}

