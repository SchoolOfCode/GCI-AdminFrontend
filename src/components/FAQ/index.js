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

export default function FAQ() {
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
                How do I move to the next stage?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The button for the next stage of your application will become
            unlocked when you have completed your current stage. Please ensure
            you have completed all steps and Submitted on your current stage.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                How do I know if my application is completed?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Click on the Stage 4 button. At the bottom if you can see some text
            that starts with "Thank you for completing your application!" then
            you have nothing further to do. We will contact you if you are being
            invited for an interview.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
