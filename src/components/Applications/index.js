import React from "react";
import UserTable from "../UserTable";
import MainButton from "../MainButton";
import { Box, Divider, Heading } from "@chakra-ui/layout";
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
  setCurrentShortlistedFilter,
  setCurrentSearchFilter,
  recentApps,
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
            setCurrentShortlistedFilter={setCurrentShortlistedFilter}
            setCurrentSearchFilter={setCurrentSearchFilter}
          />
          <UserTable
            applications={applications}
            setCurrentApplication={setCurrentApplication}
          />
          <section className="flex justify-center text-center mt-5">
            <MainButton
              size="sm"
              buttonText="Previous Page"
              onClick={() => {
                if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
                }
              }}
            />
            <p>{" " + currentPage + " / " + currentTotalPages + " "}</p>
            <MainButton
              size="sm"
              buttonText="Next Page"
              onClick={() => {
                if (currentPage < totalCurrentPage)
                  setCurrentPage(currentPage + 1);
              }}
            />
          </section>
          {recentApps.length > 0 && (
            <section className="mt-20">
              <Divider />
              <Heading size="lg">Recently viewed</Heading>
              <UserTable
                applications={recentApps}
                setCurrentApplication={setCurrentApplication}
              />
            </section>
          )}
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
