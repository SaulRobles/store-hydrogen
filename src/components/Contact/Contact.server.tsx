import Form from "./Contact.client";

import { useSession } from "@shopify/hydrogen";

export default function Contact() {
  let {language} = useSession()
  
  return(
    <div>
      <Form lng={language || 'en'}></Form>
    </div>
  )
}