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
                How do I send someone an interview invitation?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            While looking at the person`s application, scroll to the bottom and
            click on Invite to Interview. <br />
            That will automatically update their application with the Calendly
            API to select the Interview date.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                How do I create a new Admin account?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Please contact the internal staff of School of Code as they are the
            ones which will provide you with credentials.
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                How do I filter to see accounts based on different criteria?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            On the Applications page, just select the filter that you need and
            choose the option you require, it will automatically update what you
            see.
            <br />
            You can add as many filters as you feel.
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                What does the Assign dropdown do?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            That is a feature created so that if needed, you can assign
            applications to School of Code staff for easier assignment
            distribution, if ever needed.
          </AccordionPanel>
        </AccordionItem>{" "}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box className="font-semibold" flex="1" textAlign="left">
                What is love?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>Baby don't hurt me.</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
