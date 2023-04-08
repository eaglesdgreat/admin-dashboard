import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "components/Header";
import { tokens } from "theme";
import { useState } from "react";
import { ExpandMore } from "@mui/icons-material"


const Faqs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mt="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="FAQ"
          subTitle="Frequently Asked Questions Page"
        />
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Qustion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a praesentium aut 
            quisquam excepturi commodi soluta. Repudiandae deleniti temporibus eos. Provident 
            quibusdam nihil eligendi corrupti maxime? Ducimus nostrum beatae accusantium.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Qustion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a praesentium aut 
            quisquam excepturi commodi soluta. Repudiandae deleniti temporibus eos. Provident 
            quibusdam nihil eligendi corrupti maxime? Ducimus nostrum beatae accusantium.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Qustion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a praesentium aut 
            quisquam excepturi commodi soluta. Repudiandae deleniti temporibus eos. Provident 
            quibusdam nihil eligendi corrupti maxime? Ducimus nostrum beatae accusantium.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Qustion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a praesentium aut 
            quisquam excepturi commodi soluta. Repudiandae deleniti temporibus eos. Provident 
            quibusdam nihil eligendi corrupti maxime? Ducimus nostrum beatae accusantium.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Qustion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a praesentium aut 
            quisquam excepturi commodi soluta. Repudiandae deleniti temporibus eos. Provident 
            quibusdam nihil eligendi corrupti maxime? Ducimus nostrum beatae accusantium.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Qustion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a praesentium aut 
            quisquam excepturi commodi soluta. Repudiandae deleniti temporibus eos. Provident 
            quibusdam nihil eligendi corrupti maxime? Ducimus nostrum beatae accusantium.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Faqs;
