import React from "react";
import {
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Divider,
} from "@chakra-ui/react";

export default function FrequentlyAskedQuestions() {
  return (
    <section className="m-5">
      <Heading as="h3" className="text-xl font-bold mb-5">
        Frequently Asked Questions
      </Heading>
      <Divider />
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                Question 1?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Answer 1</AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                Question 2?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Answer 2</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
