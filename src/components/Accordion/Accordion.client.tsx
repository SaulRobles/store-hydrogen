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

let lngflag = false;
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function CustomizedAccordions({lng}) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const [ t, i18n ] = useTranslation();

  if(!lngflag) {
    i18n.changeLanguage(lng)
    lngflag = true;
  }

  let data = [
    {
      title: t("help.section_1.Information_about_your_shapewear_title"),
      body: t("help.section_1.Information_about_your_shapewear_data")
    },
    {
      title: t("help.section_1.Care_instructions_title"),
      body: t("help.section_1.Care_instructions_data")
    },
    {
      title: t("help.section_1.Washing_instructions_for_your_Shapewear_title"),
      body: t("help.section_1.Washing_instructions_for_your_Shapewear_data")
    },
    {
      title: t("help.section_1.Precautions_to_take_when_washing_your_Shapewear_title"),
      body: t("help.section_1.Precautions_to_take_when_washing_your_Shapewear_data")
    },
    {
      title: t("help.section_1.Washing_instructions_for_your_jeans_title"),
      body: t("help.section_1.Washing_instructions_for_your_jeans_data")
    },
    {
      title: t("help.section_1.Shape_your_figure_title"),
      body: t("help.section_1.Shape_your_figure_data")
    },
    {
      title: t("help.section_1.Why_should_I_use_shapewear_title"),
      body: t("help.section_1.Why_should_I_use_shapewear_data")
    },
    {
      title: t("help.section_1.How_do_I_choose_my_correct_Shapewear_size_title"),
      body: t("help.section_1.How_do_I_choose_my_correct_Shapewear_size_data")
    },
    {
      title: t("help.section_1.Does_the_shapewear_show_through_the_clothing_I_wear_title"),
      body: t("help.section_1.Does_the_shapewear_show_through_the_clothing_I_wear_data")
    },
    {
      title: t("help.section_1.Will_our_shapewear_hurt_title"),
      body: t("help.section_1.Will_our_shapewear_hurt_data")
    },
    {
      title: t("help.section_1.My_Shapewear_is_the_right_size_but_it_feels_too_tight_What_should_I_do_title"),
      body: t("help.section_1.My_Shapewear_is_the_right_size_but_it_feels_too_tight_What_should_I_do_data")
    },
    {
      title: t("help.section_1.What_material_is_my_shapewear_made_of_title"),
      body: t("help.section_1.What_material_is_my_shapewear_made_of_data")
    },
    {
      title: t("help.section_1.What_would_it_be_the_exchange_rate_for_my_currency_title"),
      body: t("help.section_1.What_would_it_be_the_exchange_rate_for_my_currency_data")
    },
    {
      title: t("help.section_1.What_is_the_difference_between_the_Hourglass_and_the_Mermaid_Silhouette_lines_title"),
      body: t("help.section_1.What_is_the_difference_between_the_Hourglass_and_the_Mermaid_Silhouette_lines_data")
    },
    {
      title: t("help.section_1.How_long_does_it_take_to_receive_the_tracking_number_from_an_order_title"),
      body: t("help.section_1.How_long_does_it_take_to_receive_the_tracking_number_from_an_order_data")
    },
    {
      title: t("help.section_1.Where_is_my_shapewear_from_title"),
      body: t("help.section_1.Where_is_my_shapewear_from_data")
    },
    {
      title: t("help.section_1.What_is_Powernet_title"),
      body: t("help.section_1.What_is_Powernet_data")
    }
  ]

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
