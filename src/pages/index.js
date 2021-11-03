import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
import config from "../aws-exports";
import {
  AmplifySignOut,
  AmplifyAuthenticator,
  AmplifySignIn,
} from "@aws-amplify/ui-react";
import {
  ChakraProvider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import HomePage from "../components/HomePage";
import Applications from "../components/Applications";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterAndSearch from "../components/FilterAndSearch";
import { extendTheme } from "@chakra-ui/react";
import { detectMob } from "../../../GCI-ClientFrontend/src/functions/detectMob";
import { useWindowSize } from "../../../GCI-ClientFrontend/src/hooks/useWindowSize";
import "./index.css";
const axios = require("axios").default;
Amplify.configure(config);
const theme = extendTheme({
  colors: {
    brand: {
      100: "#000818",
    },
  },
});

const IndexPage = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [application, setApplication] = useState({ empty: true });
  const [currentApplications, setCurrentApplications] = useState({});
  const [width, height] = useWindowSize();
  const [menuAlignment, setMenuAlignment] = useState("vertical");
  const [contentAlignment, setContentAlignment] = useState("left");
  // for mobile interface usage
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setMenuAlignment("horizontal");
      setContentAlignment("center");
    }
    if (width > 1080) {
      setMenuAlignment("vertical");
      setContentAlignment("left");
    }
  }, [width]);

  //get request to get our users from the DB
  useEffect(() => {
    axios
      .get(`https://gci-backend.herokuapp.com/users?offset=${page}`)
      .then((result) => {
        setCurrentApplications(result.data.payload);
      });
  }, [page]);

  //get request to determine total applications
  useEffect(() => {
    axios.get(`https://gci-backend.herokuapp.com/users/`).then((result) => {
      setTotalPages(Math.ceil(result.data.payload.length / 10));
    });
  }, [page]);

  return (
    <ChakraProvider theme={theme}>
      <AmplifyAuthenticator>
        <div
          className="App"
          slot="sign-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
            backgroundSize: "1800px 1800px",
            marginBottom: "20px",
          }}
        >
          <Header text="School of Code Application Admin Portal" />
          <AmplifySignIn hideSignUp="true" />
        </div>

        <Header
          text="School of Code Application Admin Portal"
          className="bg-gcinavy text-white"
        />
        <main className="wrapper">
          <Tabs
            className="m-20"
            variant="line"
            align={contentAlignment}
            orientation={menuAlignment}
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
              <Tab
                className="border-2 border-white text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                Sign Out
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <HomePage />
              </TabPanel>
              <TabPanel>
                <FilterAndSearch />
                <Applications
                  currentPage={page}
                  setCurrentPage={setPage}
                  applications={currentApplications}
                  currentTotalPages={totalPages}
                  setCurrentApplication={setApplication}
                  currentApplication={application}
                />
              </TabPanel>
              <TabPanel>
                <FrequentlyAskedQuestions />
              </TabPanel>
              <TabPanel>
                <AmplifySignOut buttonText="Log out" />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </main>
        <Footer />
      </AmplifyAuthenticator>
    </ChakraProvider>
  );
};

export default IndexPage;
