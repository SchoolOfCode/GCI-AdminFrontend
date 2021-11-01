import React from "react";
import {
  ChakraProvider,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import HomePage from "../components/HomePage";
import Applications from "../components/Applications";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";

const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Heading className="text-4xl font-bold mb-5">Admin frontend!!</Heading>
      </main>

      <Tabs
        className="m-20"
        variant="line"
        align="left"
        orientation="vertical"
        isLazy
      >
        <TabList>
          <Tab
            className="border-2 border-white text-white font-semibold"
            bg="#8896A3"
            _selected={{ color: "white", bg: "#4A90E2" }}
          >
            <p className="homePage">Home Page</p>
          </Tab>
          <Tab
            className="border-2 border-white text-white font-semibold"
            bg="#8896A3"
            _selected={{ color: "white", bg: "#4A90E2" }}
          >
            <p className="applications">Applications</p>
          </Tab>
          <Tab
            className="border-2 border-white text-white font-semibold"
            bg="#8896A3"
            _selected={{ color: "white", bg: "#4A90E2" }}
          >
            <p className="faq">F.A.Q.</p>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <HomePage />
          </TabPanel>
          <TabPanel>
            <Applications />
          </TabPanel>
          <TabPanel>
            <FrequentlyAskedQuestions />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
};

export default IndexPage;
