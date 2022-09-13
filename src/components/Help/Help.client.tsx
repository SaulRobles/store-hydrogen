import React, { useRef } from "react";

export default function Help() {
  const [Text, setText] = React.useState({text: 0})
  const bodyRef = useRef(null);

  const text_change = (e, val) => {
    setText({...Text, text: val})
    
    let body = bodyRef.current;
    body.innerHTML = data[Text.text].html;

    let parent = e.target.parentNode

    parent.childNodes.forEach(element => {
      element.classList.remove("Help_Active_Button")
    });

    e.target.classList.add("Help_Active_Button")
  }  

  return (
    <div className="Help_Information_Container">
      <div className="Help_SideBar">
        <button className="Help_Active_Button" onClick={(e) => text_change(e, 0)}>WEB STORE POLICIES</button>
        <button onClick={(e) => text_change(e, 1)}>SHIPPING POLICY</button>
        <button onClick={(e) => text_change(e, 2)}>RETURNS AND EXCHANGES POLICY</button>
        <button onClick={(e) => text_change(e, 3)}>PRIVACY POLICY AND TREATMENT OF PERSONAL DATA</button>
      </div>
      <div className="Help_Body_Container">
        <span ref={bodyRef} dangerouslySetInnerHTML={{__html: data[Text.text].html}}></span>
      </div>
    </div>
  )
}

let data = [
  {
    html: `<span>
    <strong>How do I make a purchase?</strong> 
    <br/><br/>
    Purchasing at solbeautyandcare.com is very easy, just follow these steps:
    <br/><br/>
    1. Enter our website in the section Home, click on “Go To Store”, explore and find your ideal product.
    <br/><br/>
    2. To add products to your cart, choose color and size (compare your size with our size chart before buying). Any questions? Our sales representatives will help you find the right product for your body. 
    <br/><br/>
    3. When you have everything you need in your shopping cart, continue to fill out the shipment form in the designated fields.
    <br/><br/>
    4. Select your payment method: Credit or Debit: Continue filling out the payment form with the card you want to pay with, next click Pay. Once the payment has been accepted, you will receive an email with the purchase confirmation and your order number.
    <br/><br/>
    5. Receive your product at the door of your home or office.
    <br/><br/>
    <strong>Is it safe to buy through Solbeautyandcare.com?</strong>
    <br/><br/>
    It is 100% safe to buy at solbeautyandcare.com. Both our website and payment system include Secure Socket Layer (SSL), a security protocol with which your information travels safely. Additionally, in our privacy policy you can consult the way we manage your personal data.  However, it is important that you take the recommended measures to prevent fraud.
    <br/><br/>
    <strong>How can I modify the items in my shopping cart?</strong>
    <br/><br/>
    If your order has not been finalized, you can go to your shopping cart in the top right corner, that will show you the products that you have chosen, there you can erase the product you don’t want and then look for the right one and choose it again.
    <br/><br/>
    If your purchase has been confirmed, we suggest you to contact our customer service representatives as soon as possible so we can change your selection before it leaves our facilities, otherwise, we will not be able to make changes until your product arrives. 
    <br/><br/>
    Be reminded that after you receive your product, you have 10 calendar days to exchange your product.
    <br/><br/>
    If you have any doubts, please contact our customer service team:
    <br/><br/>
    info@solbeautyandcare.com
    <br/>
    USA: (800) 387 6827
    <br/>
    MÉXICO: (800) 953 1336
    <br/>
    USA SD: +1 (619) 735 7575
    <br/>
    WHATSAPP: +52 (664) 414 9190
    </span>
    `
  },
  {
    html: `<span>
    <strong>How long does shipping take?</strong>
    <br/><br/>
    The estimated shipping time is within 7 to 10 calendar days for the United States, 6 to 8 calendar days for Mexico and 8 to 11 calendar days for the rest of the world. 
    <br/><br/>
    <strong>How much does shipping cost?</strong>
    <br/><br/>
    Shipping to Mexico and the United States is free.
    <br/><br/>
    Shipping fees to any other country will be covered by the customer.
    <br/><br/>
    <strong>How can I track my order?</strong>
    <br/><br/>
    When we ship your products, you will receive an email notification indicating the order number and the tracking number. 
    <br/>
    With the tracking number you can see the shipment status and the estimated delivery date directly on the carrier's website.
    <br/><br/>
    <strong>How can I modify the shipping address?</strong>
    <br/><br/>
    To modify your shipping address, you must contact us before the package leaves our facilities, this is within 24 hours of completing your purchase, indicating your order number and the new delivery address. 
    <br/><br/>
    Attention: If your order has shipped, it will not be possible to change your address. Contact us to help you. 
    <br/>
    info@solbeautyandcare.com
    <br/>
    USA: (800) 387 6827
    <br/>
    MÉXICO: (800) 953 1336
    <br/>
    USA SD: +1 (619) 735 7575
    <br/>
    WHATSAPP: +52 (664) 414 9190
    <br/><br/>
    <strong>What can I do if I am not at home when the order arrives?</strong>
    <br/><br/>
    If at the moment of delivery, you are not at your address, the carrier may leave it with any person of legal age who is at the registered address. If there is no one to receive the order, a new delivery attempt will be made the next business day. The carrier will make up to 2 delivery attempts before being returned to our offices. In this case, we recommend you contact the carrier to agree on a new delivery date. 
    <br/><br/>
    <strong>What can I do if my package has not been delivered or takes longer than usual?</strong>
    <br/><br/>
    In different delivery companies, the shipment status may take 1 to 3 calendar days to be updated on their website.
    <br/><br/>
    We suggest you check the status of your order during that time. If more than 3 days have passed and you still cannot track your order, contact us by the following means:
    <br/>
    info@solbeautyandcare.com
    <br/>
    USA: (800) 387 6827
    <br/>
    MÉXICO: (800) 953 1336
    <br/>
    USA SD: +1 (619) 735 7575
    <br/>
    WHATSAPP: +52 (664) 414 9190
    <br/>
    `
  },
  {
    html: `
    <strong>How can I exchange or return a product?</strong>
    <br/><br/>
    Exchanges for eligible products purchased through our website must be made by returning your product by mail (postal service). If you need to exchange a product, you will be able to request it within the first 10 days of receipt of your purchase. The product will be eligible for exchange or return on a case-by-case basis under the following conditions:
    <br/><br/>
    1.- All items must be in optimal conditions, with original tags attached and original packaging. Without exception, items that have been worn, altered, or irreparably damaged will not be accepted for return.
    <br/><br/>
    2.- Discounted products do not apply for exchange or for credit in other purchases, therefore, they cannot be returned. It is advisable to check carefully when buying this type of items to prevent choosing incorrect sizes.
    <br/><br/>
    3.- Due to the intimate nature of some of our products, they must be tried on wearing underwear and the protective panty included in your package.
    <br/><br/>
    4.- It is necessary to take care of your personal hygiene when trying on your products. Since some of our products are intimate, they require special care.
    <br/><br/>
    5.- The product must not present any trace of odor or body fluid, or residue of hygiene products.
    <br/><br/>
    6.-When Sol Beauty and Care receives your product, a thorough evaluation will be carried out and will give you an answer about your exchange or return within a period not exceeding 20 business days from the receipt of the product at our facilities.
    <br/><br/>
    7.-Only one exchange will be applied by product. To avoid any inconveniences its recommended to call our help support for assistance since your first purchase.
    <br/><br/>
    If the returned product does not meet the aforementioned quality specifications, the exchange will not be made, therefore, the return shipping label will be paid by the customer under a period of 30 days otherwise the product will be disposed by the company without replacement or refund.
    <br/><br/>
    It is important to note that we do not make monetary refunds.
    <br/><br/>
    In case the exchange is valid:
    <br/><br/>
    1.- The customer must pay the shipping cost in the amount of $15 US dollars for Mexico and the United States, and $50 US dollars for the rest of the world.
    <br/><br/>
    2.- If the exchange is due to a factory fault, Sol Beauty and Care will cover the shipping cost.
    <br/><br/>
    3.- Shipping costs are not refundable.
    <br/><br/><br/>
    To facilitate the exchange process, contact our returns and exchanges team:
    <br/><br/>
    cambios@solbeautyandcare.com
    <br/><br/>
    USA: (800) 387 6827
    <br/><br/>
    MÉXICO: (800) 953 1336
    <br/><br/>
    USA SD: +1 (619) 735 7575
    <br/><br/>
    WHATSAPP: +52 (664) 414 9190
    <br/><br/>
    <strong>How long does it take to make a return or exchange?</strong>
    <br/><br/>
    Merchandise that qualifies for returns or exchanges will be processed in 15 to 20 business days from receipt of the product. You will receive a confirmation email once the process is complete. In case of credit assignment, a notification of the assigned credit amount will be sent to you by email. 
    <br/><br/><hr style='height: 0.1vw; background: black'/><br/>
    <strong>Can I exchange an item that someone bought me as a gift?</strong>
    <br/><br/>
    To exchange products that have been purchased as gifts, we require the person who made the purchase to contact our customer service within the first 10 calendar days of receiving it, since any modification of the generated order will only be applicable for the person who made the purchase.
    `
  },
  {
    html: `
    <strong>SOL BEAUTY AND CARETM</strong> is responsible for the use and protection of your personal data. You can contact us by writing to the email: info@solbeautyandcare.com 
    <br/><br/>
    In this regard, we inform you of the following:
    <br/><br/>
    This notice always contemplates the principles of legality, consent, information, quality, purpose, loyalty, proportionality, and responsibility in the processing of personal data.
    <br/><br/>
    The data that we collect for this:
    <br/>
    Name
    <br/> 
    Last name 
    <br/>
    Address
    <br/>
    Email
    <br/> 
    Telephone and/or Cellphone numbers 
    <br/><br/>
    How we use your personal data.
    <br/><br/>
    <ol style="margin-left: 3rem">
      <li>1. To contact you for purposes of promotions, sales, contacts and shipments of the products we offer.</li>
      <li>2. To identify you as a client.</li>
      <li>3. To evaluate and generate statistics on purchasing and consumption habits, internal studies of the profile of our clients and the quality of our products</li>
      <li>4. To notify you of offers, new products, invite you to participate in opinion surveys to improve our products</li>
      <li>5. For the creation and direct offer of new means of sale, new payment methods and marketing.</li>
      <li>6. To make valid guarantees and returns</li>
    </ol>
    <br/><br/>
    <strong>Sensitive personal data.</strong>
    <br/><br/>
    <strong>SOL BEAUTY AND CARETM</strong> does not request sensitive personal data. 
    <br/>
    <strong>Information that is shared with third parties</strong>
    <br/>
    <strong>SOL BEAUTY AND CARETM</strong> does not transfer your personal data to third parties. 
    <br/><br/>
    The online payment platforms available through our portal are owned by third parties which comply with their own privacy policies.
    <br/><br/>
    <strong>SOL BEAUTY AND CARETM</strong> does not have access to your personal data related to the use of credit or debit cards, security codes or passwords to access bank accounts that you use for electronic payments.
    <br/><br/>
    <strong>Your Choices and Access Requests</strong>
    <br/><br/>
    We strive to offer you choices about how personal information is used and shared. Your choices include:
    <br/>
    <ul style="margin-left: 3rem">
      <li><strong>Online Advertising.</strong> You can manage third-party advertising preferences for some of the third parties we work with to serve advertising across the Internet by using the choices available at our website. We do not guarantee that all of the third parties we work with will honor the elections you make using those options, but we strive to work with third parties that do.</li>
      <li><strong>Social Media Platforms and Networks.</strong> We encourage you to review your privacy options and settings with the social media platforms and networks you use to understand what choices you have about sharing information from those platforms and networks with us.</li>
      <li><strong>Email Choices.</strong> You can opt out of marketing or advertising emails by using the "unsubscribe" link or mechanism noted in marketing or advertising emails you receive from us. You may also request to opt out of marketing or advertising emails by contacting us through one of the methods specified in the "Contact us" section. For service or transactional emails about your Sol Beauty and Care customer account, please email info@solbeautyandcare.com. To unsubscribe from marketing or advertising emails you receive from the Sol Beauty and Care companies, please use the "unsubscribe" link or mechanism noted in the marketing or advertising emails you receive from those brands or visit the privacy policy associated with the third party that you are receiving emails from and use the choices provided therein.</li>
      <li><strong>Direct Mail Choices.</strong> You may opt out of receiving marketing or advertising by direct mail by contacting us through one of the methods specified in the "Contact us" section and sharing the name and mailing address that you would like to opt out. Please note that these requests may take up to 4-6 weeks to become effective.</li>
      <li><strong>Telephone Choices (calls and texts).</strong> You may opt out of receiving marketing or advertising calls or text messages by contacting us through one of the methods specified in the "Contact us" section and sharing the phone number that you would like to opt out.</li>
      <li>Access Requests. If you have registered for an online account, we allow you to access and update certain personal information that you have provided to us by logging into your online account and using the features and functionalities available there. Unless alternate procedures are noted for your state, you may also make a request for access to personal information by sending an email or writing to us at the address specified in the "Contact us" section. We cannot grant all access requests, and we may request additional information from you to verify your identity before granting an access request.</li>
    </ul>
    <br/><br/>
    You may have additional rights in the country or state in which you reside. Please see the options in our website for additional information.
    <br/><br/>
    <strong>Security and Fraud</strong>
    <br/><br/>
    We take steps to help protect the confidentiality and security of personal information you share with us through our website. In general, information transmitted through the Internet may not be perfectly secure, and we are unable to guarantee the security of your personal information. We encourage you to take steps to help protect the confidentiality and security of your account and personal information, including by doing the following: 
    <br/>
    <ul style="margin-left: 3rem">
      <li>· Reviewing your Sol Beauty and Care account periodically and immediately reporting any unexpected activity or unrecognized information.</li>
      <li>· Installing the latest security updates and anti-virus software on your computer to help prevent malware and viruses.</li>
      <li>· Using complex passwords.</li>
      <li>· Not using the same password on more than one website.</li>
      <li>· Not sharing your password with others.</li>
      <li>· Password protecting your computer and mobile devices.</li>
      <li>· Signing out/logging off website sessions so that your session is closed, especially when using a public computer.</li>
    </ul>
    <br/><br/>
    You may get in contact with websites, emails, or texts that try to lure you into providing personal information with an offer from our companies or third parties. If you become aware of any potentially fraudulent activity on a website or in an email or text, please forward the information to info@solbeautyandcare.com or call us at (800) 387 6827 so that we can follow up. You can also visit our website for additional information.
    <br/><br/>
    <strong>Notices, Disclosures, and State-Specific Rights</strong>
    <br/>
    <ul style="margin-left: 3rem">
      <li><strong>· Links to Other Websites and Services.</strong> Our website may provide links to other Internet sites, content, or videos (embedded or direct links) maintained by third parties. We are not responsible for the sites, content, or videos accessed via the links, and we have not reviewed the privacy practices of those third parties. We encourage you to review the privacy practices of those third parties.</li>
      <li><strong>· Browsers Do Not Track Signals.</strong> While we strive to offer you choices when you use our website, we do not promise that we will be able to receive or honor web browser Do Not Track signals.</li>
      <li><strong>· California Privacy Rights.</strong> California law entitles residents to ask us for a notice describing what categories of personal information we share with third parties for the third parties' direct marketing purposes. Unless you request us to or consent to our doing so, Sol Beauty and Care does not sell any personal information to third parties for their own direct marketing purposes. If you have questions about these practices, please contact us at California law also provides residents with rights to request access to and deletion of certain personal information, to know whether personal information is shared, and to opt out of the sale of personal information. Some California laws also may define "personal information" differently from this Policy. To understand how we honor these California rights, to make requests regarding these rights, and to learn more about how California law defines "personal information," please visit https://oag.ca.gov/privacy/ccpa</li>
      <li><strong>· Children's Privacy.</strong> Sol Beauty and Care does not knowingly request or collect personal information from any person under 13 years of age without prior verifiable parental consent. If you believe that your child under the age of 13 has submitted personal information to Sol Beauty and Care in connection with our website, and without prior verifiable parental consent, please contact us at info@solbeautyandcare.com so that we can take steps to delete the personal information that they provided.</li>
    </ul>
    <br/>
    <strong>International Customers</strong>
    <br/><br/>
    If you provide personal information through our website separate from a purchase, you agree that the personal information will be transferred to and processed in Mexico and any other country or jurisdiction at our sole discretion. 
    <br/><br/>
    The laws that apply to the use and protection of personal information in Mexico, the United States or other countries or jurisdictions in which we transfer, or process personal information may be different from the laws and protections in your country.
    `
  }
]