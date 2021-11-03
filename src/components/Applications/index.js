import React from "react";
import UserTable from "../UserTable";
import MainButton from "../MainButton";
import { Box } from "@chakra-ui/layout";
import CurrentApplication from "../CurrentApplication";

export default function Applications({
  applications,
  currentPage,
  setCurrentPage,
  currentTotalPages,
  setCurrentApplication,
  currentApplication,
  totalCurrentPage,
}) {
  return (
    <section>
      {currentApplication.empty && (
        <Box border>
          <UserTable
            applications={applications}
            setCurrentApplication={setCurrentApplication}
          />
          <MainButton
            size="sm"
            buttonText="Previous Page"
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
          />
          {" " + currentPage + " / " + currentTotalPages + " "}
          <MainButton
            size="sm"
            buttonText="Next Page"
            onClick={() => {
              if (currentPage < totalCurrentPage)
                setCurrentPage(currentPage + 1);
            }}
          />
        </Box>
      )}
      {currentApplication.empty === undefined && (
        <CurrentApplication
          currentApplication={currentApplication}
          setCurrentApplication={setCurrentApplication}
        />
      )}
    </section>
  );
}
