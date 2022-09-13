import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />)
) 
  
(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {
        data && data.map((item, index) => {
          return (
            <Accordion TransitionProps={{ unmountOnExit: true }} key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p style={{textAlign: "justify"}} dangerouslySetInnerHTML={{__html: item.body}}></p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </div>
  );
}

let data = [
  {
    title: "Information about your shapewear",
    body: `
    Now that you already have our shapewear, which was redesigned and perfected especially for you, we want to make sure you get the most out of it, so we share with you our most important recommendations so you can take advantage of it to its full potential.
    <br/><br/>
    When you finally get your hands on it... Don't panic, it will fit! The PowerNet technology of the garment allows it to adapt to the body providing high compression and freedom of movement, most likely the first time you use your shapewear you will require the help of another person to put it on, don't give up at the first attempt!
    <br/><br/>
    Keep in mind that from the first hours of wearing the garment. The girdle will expand during the use and adapt to your body making it feel more comfortable so that it can be used with greater continuity. Be patient, our goal is to use it at least 12 hours a day to complete at least 3 to 6 months, that's when you will see permanent results.
    <br/><br/>
    Keep in mind that you can find more tips and important recommendations for the proper use and care of your shapewear through our website and social media.
    <br/><br/>
    Finally, we invite you to be part of the Sol Beauty and Care community, tell us about your experiences and share with us your progress photos to help motivate more girls like you who are looking to look and feel better.
    `
  },
  {
    title: "Indications about your Shapewear",
    body: `
    <ol>
      <li>1.- Depending on the treatment for daily use, you should wash your shapewear every 2 days.</li>
      <li>2.- Washing should be done by hand with mild or neutral soap, avoiding squeezing or wringing.</li>
      <li>3.- To dry the product, place it in the open air, avoiding direct sunlight.</li>
      <li>4.- The Shapewear should not be dried in drying machines to prevent the heat from damaging or deforming the fibers.</li>
      <li>5.- If you have a shapewear product, make sure that the seams between the legs should be right in the middle of the crotch area to ensure that your shapewear fits properly.</li>
    </ol>
    `
  },
  {
    title: "Washing instructions for your Shapewear",
    body: `
    <ol>
      <li>1.- Soak the product in room temperature water.</li>
      <li>2.- Use a wet towel with neutral soap to clean the shapewear.</li>
      <li>3.- In order to remove the remains of deodorant and bad odor, rub the areas that make direct contact with your underarms with the wet towel.</li>
      <li>4.- For the intimate area, soak the area with soap and rub cloth against cloth until eliminating marks or bad odor.</li>
      <li>5.- Once the sweat and deodorant residues have been eliminated, soak the product until the soap residues disappear.</li>
      <li>6.- Proceed to dry the shapewear without wringing it out. Place it directly under the shade or with a fan.</li>
    </ol>
    `
  },
  {
    title: "Precautions to take when washing your Shapewear",
    body: `
    <ol>
      <li>1.- Avoid using brushes to wash your product, as they may ruin the fabric of your product.</li>
      <li>2.- Avoid abrasive detergents such as powder soaps.</li>
      <li>3.- Do not use hot water to wash the shapewear, as high temperatures damage the fabric of your product.</li>
      <li>4.- Do not use chlorine bleach to remove stains, to avoid damaging the fabric of the product.</li>
      <li>5.- Do not put the product in a dryer.</li>
      <li>6.- Do not squeeze the product after washing.</li>
    </ol>
    `
  },
  {
    title: "Washing instructions for your jeans",
    body: `
    <ol>
      <li>1.- Always wash your jeans inside out and in cold water to preserve their appearance.</li>
      <li>2.-Do not dry clean. You will only make the fibers of the pants weaken much faster.</li>
      <li>3.- Don't leave them soaking for a long time, jeans don't need much effort to get clean.</li>
      <li>4.- Never use bleach or dryer, spread them out in the shade and let them air dry.</li>
      <li>5.- Hanging jeans in your closet can affect and deform their shape, it is better to store them folded.</li>
      <li>6.- Wash separately and always inside out, at the end of the process do not twist them, this may affect the composition of the product.</li>
      <li>7.- Wash preferably with cold water in the delicate cycle or by hand, hot water can shrink and break the fibers.</li>
      <li>8.- Do not soak, this helps the color of your jean to remain over time.</li>
      <li>9.- Use mild detergents, do not use bleach or fabric softeners. No matter how dirty they are, you will damage the color.</li>
      <li>10.- Keep in mind the lifespan of the jean, this color can change without losing its beauty.</li>
    </ol>
    <br/><br/>
    Throughout each collection, we pay tribute to the DENIM as a brand essential and a tribute to the value of luxury and sophistication represented in JEANS of perfect cut, impeccable tailoring, the best quality inputs and the most qualified molding process.
    `
  },
  {
    title: "Shape your figure",
    body: `
    In Sol Beauty and Care we know that every woman is different, 
    so we want each of them to look and feel good with her body, 
    that's why we are committed to our products, 
    designed to improve the quality of life of women; with style, comfort and quality. 
    Your shapewear is designed with PowerNet technology, 
    which helps to mold your figure in a soft way so that it does not hurt you or you despair its use. 
    In addition, our garments are made with the highest quality materials and the latest elastomeric technology to avoid any kind of skin irritation. 
    Thanks to the mixture of resistant Cotton, Spandex and Nylon materials used for the elaboration of this product.
    `
  },
  {
    title: "Why should I wear shapewear?",
    body: `
      The use of girdles has many benefits such as the following:
      <br/><br/>
      In Women:
      <ol>
        <li>1.- Shapes the figure and helps to reduce sizes.</li>
        <li>2.- Provides support to your back, correcting posture.</li>
        <li>3.- Promotes tissue reaffirmation after pregnancy.</li>
        <li>4.- From 2 to 4 months post-surgery, it helps the skin to adhere to the muscle again, avoiding inflammation and fat accumulation.</li>
        <li>5.- Its constant use favors a curvier figure by closing the rib cage.</li>
        <li>6.- Reaffirms tissues and tones muscles and abdomen.</li>
      </ol>
      <br/><br/>
      The shaping vest for men:
      <ol>
        <li>1.- Reduces fat accumulated in the obliques and compacts the pectorals.</li>
        <li>2.- Provides support to the back correcting posture.</li>
      </ol>
    `
  },
  {
    title: "How do I choose my correct Shapewear size?",
    body: `
    To get the most out of your shapewear, remember that it is very important to choose the right size; 
    you should measure, with body tape, the part of your body corresponding to the garment. 
    For the waistband, you must measure your waist above the navel without holding your breath 
    (tucking your belly), once you have selected your product, press the option 
    "Size Chart" in which you will see our Guide helping you choose your product. 
    Remember that if it is the first time you buy a shapewear, 
    consult with our customer service team to receive personalized assistance. 
    You can contact us via the following means:
    <br/><br/>
    info@solbeautyandcare.com
    <br/>
    USA: (800) 387 6827
    <br/>
    MEXICO: (800) 953 1336
    <br/>
    USA SD: +1 (619) 735 7575
    <br/>
    WHATSAPP: +52 (664) 414 9190
    `
  },
  {
    title: "Does the shapewear show through the clothing I wear?",
    body: `
    In most cases, the shapewear is quite discreet. However, 
    if you wear clothes that are too thin and tight, there will be certain details that can be noticed, 
    especially if it is a shapewear with center snaps.
    `
  },
  {
    title: "Will our shapewear hurt?",
    body: `
    Our products are designed with high tech materials of the highest quality, 
    which are resistant and soft to the touch, 
    avoiding any type of irritation so that you are always comfortable. 
    Remember that it is very important that your shapewear size is the proper one according to your body to avoid any kind of discomfort. 
    If at any time you experience discomfort or pain, we recommend you reduce the amount of time you wear it or stop using it altogether. 
    The use of this product is the sole responsibility of the user.
    `
  },
  {
    title: "My Shapewear is the right size, but it feels too tight, what should I do?",
    body: `
    During the first few days of wearing your shapewear, it will feel very tight. 
    This sensation is normal. As the shapewear is worn and washed, it becomes more flexible. 
    To make your shapewear more moldable, we recommend leaving it in water with fabric softener for 30 minutes and then washing it by hand.
    `
  },
  {
    title: "What material is my shapewear made of?",
    body: `
    All our shapewear are made with Powernet technology to adjust and mold to your body. 
    All materials are of high quality such as cotton, Nylon, Spandex among others, 
    which besides being resistant avoid any type of irritation to your skin.
    `
  },
  {
    title: "What would it be the exchange rate for my currency (Colombian, Peru, etc)?",
    body: `
    When you are paying in USD outside the USA, 
    the currency exchange rate will be determined by the bank that issued your card.
    `
  },
  {
    title: "What is the difference between the Hourglass and the Mermaid Silhouette lines?",
    body: `
    Hourglass: The seams in the Hourglass line are thicker, the shaping effect is marked (which means that wearing the shapewear will be noticeable), push up in buttocks is firmer, better waist definition, and there is a wider variety of sizes, both regular and irregular.
    <br/><br/>
    Mermaid Silhouette: In our Mermaid Silhouette, seams are discreet and unnoticeable, the shaping effect is more natural, push up in buttocks is subtle, as well as waist definition. Due to its ‘invisible’ nature, Mermaid Silhouette is friendly with light clothing.
    `
  },
  {
    title: "Why does my order appears as Canceled in the app?",
    body: `
    This is a visual error in the app, but your order is OK. (make sure to download the latest App version available)
    `
  },
  {
    title: "How long does it take to receive the tracking number of an order?",
    body: `
    It takes 1 or 2 days as much.
    `
  }
]
