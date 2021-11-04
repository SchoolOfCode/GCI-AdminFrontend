import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import GenericInput from "../GenericInput";
import MainButton from "../MainButton";
import { Text } from "@chakra-ui/react";

export default function FilterAndSearch({
  setCurrentStageFilter,
  setCurrentDateFilter,
  setCurrentRegionFilter,
  setCurrentAssigneeFilter,
  setCurrentStatusFilter,
  setCurrentInterviewFilter,
  setCurrentShortlistedFilter,
  setCurrentSearchFilter,
}) {
  const [updated, setUpdated] = useState(0);

  useEffect(() => {
    setCurrentStageFilter(document.querySelector(".filterByStage").value);
    setCurrentDateFilter(document.querySelector(".filterByDate").value);
    setCurrentRegionFilter(document.querySelector(".filterByRegion").value);
    setCurrentAssigneeFilter(document.querySelector(".filterByAssignee").value);
    setCurrentStatusFilter(document.querySelector(".filterByStatus").value);
    setCurrentInterviewFilter(
      document.querySelector(".filterByInterview").value
    );
    setCurrentShortlistedFilter(
      document.querySelector(".filterByShortlisted").value
    );
    setCurrentSearchFilter(document.querySelector(".filterBySearch").value);
  }, [updated]);

  return (
    <div>
      <section className="flex flex-row">
        <Text>Filter by</Text>
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByStage"
          placeholderText="Stage"
          first="Stage_1"
          second="Stage_2"
          third="Stage_3"
          forth="Stage_4"
          fifth="Interview"
          sixth="Final"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByDate"
          placeholderText="Date"
          first="ASC"
          second="DESC"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByRegion"
          placeholderText="Region"
          first="North_West"
          second="West_Midlands"
          third="East_Midlands"
          forth="London"
          fifth="South_East"
          sixth="Other"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByAssignee"
          placeholderText="Assignee"
          first="Chris"
          second="Liz"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByStatus"
          placeholderText="Status"
          first="Accepted"
          second="Pending"
          third="Rejected"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByInterview"
          placeholderText="Interview"
          first="Yes"
          second="No"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByShortlisted"
          placeholderText="Shortlisted"
          first="Yes"
          second="No"
        />
      </section>
      <section>
        <div className="grid grid-flow-row">
          <Text>Search by</Text>
          <GenericInput
            nowUpdated={updated}
            setNowUpdated={setUpdated}
            role="filterBySearch"
            placeholderText="ID, E-mail"
          />
          <MainButton buttonText="Search" size="sm" />
        </div>
      </section>
    </div>
  );
}
