import React from "react";
import UserTable from "../UserTable";
import MainButton from "../MainButton";
import { Box } from "@chakra-ui/layout";
import CurrentApplication from "../CurrentApplication";
import FilterAndSearch from "../FilterAndSearch";

export default function Applications({
  applications,
  currentPage,
  setCurrentPage,
  currentTotalPages,
  setCurrentApplication,
  currentApplication,
  totalCurrentPage,
  setCurrentStageFilter,
  setCurrentDateFilter,
  setCurrentRegionFilter,
  setCurrentAssigneeFilter,
  setCurrentStatusFilter,
  setCurrentInterviewFilter,
  setCurrentShortlistedFilter,
  setCurrentSearchFilter,
}) {
  return (
    <section>
      {currentApplication.empty && (
        <Box border>
          <FilterAndSearch
            setCurrentStageFilter={setCurrentStageFilter}
            setCurrentDateFilter={setCurrentDateFilter}
            setCurrentRegionFilter={setCurrentRegionFilter}
            setCurrentAssigneeFilter={setCurrentAssigneeFilter}
            setCurrentStatusFilter={setCurrentStatusFilter}
            setCurrentInterviewFilter={setCurrentInterviewFilter}
            setCurrentShortlistedFilter={setCurrentShortlistedFilter}
            setCurrentSearchFilter={setCurrentSearchFilter}
          />
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
          setCurrentSearchFilter={setCurrentSearchFilter}
        />
      )}
    </section>
  );
}
