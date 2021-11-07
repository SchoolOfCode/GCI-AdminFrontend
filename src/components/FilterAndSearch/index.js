import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown";
import GenericInput from "../GenericInput";
import { Text } from "@chakra-ui/react";

export default function FilterAndSearch({
  setCurrentStageFilter,
  setCurrentDateFilter,
  setCurrentRegionFilter,
  setCurrentAssigneeFilter,
  setCurrentStatusFilter,
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
    setCurrentShortlistedFilter(
      document.querySelector(".filterByShortlisted").value
    );
    setCurrentSearchFilter(document.querySelector(".filterBySearch").value);
  }, [updated]);

  return (
    <div>
      <section className="grid grid-flow-col">
        <Text className="mr-10">Filter by</Text>
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByStage"
          placeholderText="Stage"
          first="Stage 2"
          second="Stage 3"
          third="Stage 4"
          forth="Interview"
          fifth="Final"
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
          first="North West"
          second="West Midlands"
          third="East Midlands"
          forth="London"
          fifth="South East"
          sixth="Other"
        />
        <Dropdown
          nowUpdated={updated}
          setNowUpdated={setUpdated}
          role="filterByAssignee"
          placeholderText="Assignee"
          first="Chris"
          second="Liz"
          third="Loz"
          fourth="Tao"
          fifth="Arshi"
          sixth="Hamza"
          seventh="Not assigned"
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
          role="filterByShortlisted"
          placeholderText="Shortlisted"
          first="Yes"
          second="No"
        />
      </section>
      <section className="mb-2">
        <div className="grid grid-flow-row">
          <Text className="mb-2">Search by</Text>
          <GenericInput
            nowUpdated={updated}
            setNowUpdated={setUpdated}
            role="filterBySearch"
            placeholderText="ID, E-mail, etc."
          />
        </div>
      </section>
    </div>
  );
}
