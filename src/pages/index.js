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
import { extendTheme } from "@chakra-ui/react";
import { detectMob } from "../functions/detectMob/index";
import { useWindowSize } from "../hooks/useWindowSize/index";
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
  const [width] = useWindowSize();
  const [menuAlignment, setMenuAlignment] = useState("vertical");
  const [contentAlignment, setContentAlignment] = useState("left");
  const [stageFilter, setStageFilter] = useState("none");
  const [dateFilter, setDateFilter] = useState("DESC");
  const [regionFilter, setRegionFilter] = useState("none");
  const [assigneeFilter, setAssigneeFilter] = useState("none");
  const [statusFilter, setStatusFilter] = useState("none");
  const [margin, setMargin] = useState("m-20");
  const [shortlistedFilter, setShortlistedFilter] = useState("none");
  const [recentApplications, setRecentApplications] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  // saving recently viewed applications in an array to display
  useEffect(() => {
    let alreadyAdded = false;
    if (!application.empty) {
      recentApplications.map((app) => {
        if (app.id === application.id) alreadyAdded = true;
      });
      if (!alreadyAdded)
        setRecentApplications([...recentApplications, application]);
    }
  }, [application]);

  // for mobile interface usage
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setMenuAlignment("horizontal");
      setContentAlignment("center");
      setMargin("mt-5");
    }
    if (width > 1080) {
      setMenuAlignment("vertical");
      setContentAlignment("left");
      setMargin("m-20");
    }
  }, [width]);

  //get request to get our users from the DB
  useEffect(() => {
    axios
      .get(
        `https://gci-backend.herokuapp.com/users?offset=${page}&stage=${stageFilter}&date=${dateFilter}&region=${regionFilter}&assignee=${assigneeFilter}&status=${statusFilter}&shortlisted=${shortlistedFilter}&search=${searchFilter}`
      )
      .then((result) => {
        setCurrentApplications(result.data.payload);
      });
  }, [
    page,
    stageFilter,
    dateFilter,
    regionFilter,
    assigneeFilter,
    statusFilter,
    shortlistedFilter,
    searchFilter,
    totalPages,
  ]);

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
            className={margin}
            variant="line"
            align={contentAlignment}
            orientation={menuAlignment}
            isLazy
          >
            <TabList>
              <Tab
                className="m-1 text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                <p className="homePage">Home Page</p>
              </Tab>
              <Tab
                className="m-1 text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                <p className="applications">Applications</p>
              </Tab>
              <Tab
                className="m-1 text-white font-semibold"
                bg="#8896A3"
                _selected={{ color: "white", bg: "#4A90E2" }}
              >
                <p className="faq">F.A.Q.</p>
              </Tab>
              <Tab
                className="m-1 text-white font-semibold"
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
                <Applications
                  currentPage={page}
                  setCurrentPage={setPage}
                  applications={currentApplications}
                  currentTotalPages={totalPages}
                  setCurrentApplication={setApplication}
                  currentApplication={application}
                  setCurrentStageFilter={setStageFilter}
                  setCurrentDateFilter={setDateFilter}
                  setCurrentRegionFilter={setRegionFilter}
                  setCurrentAssigneeFilter={setAssigneeFilter}
                  setCurrentStatusFilter={setStatusFilter}
                  setCurrentShortlistedFilter={setShortlistedFilter}
                  setCurrentSearchFilter={setSearchFilter}
                  recentApps={recentApplications}
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
