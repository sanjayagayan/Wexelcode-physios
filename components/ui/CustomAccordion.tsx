"use client";

import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  title: string;
  text: string;
};
export default function CustomAccordion({ title, text }: Readonly<Props>) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion
      disableGutters
      elevation={0}
      expanded={expanded}
      onChange={handleChange}
      sx={{
        backgroundColor: expanded ? "#F9F5F5" : "#ffffff",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          fontWeight: 700,
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{text}</AccordionDetails>
    </Accordion>
  );
}
