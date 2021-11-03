import React from "react";
import Dropdown from "../Dropdown";
import GenericInput from "../GenericInput";
import MainButton from "../MainButton";
import { Text } from "@chakra-ui/react";

export default function FilterAndSearch() {
  return (
    <div>
      <section className="flex flex-row">
        <Text>Filter by</Text>
        <Dropdown
          role="filterByStage"
          placeholderText="Stage"
          first="stage 1"
          second="stage 2"
          third="stage 3"
          forth="stage 4"
          fifth="Interview"
        />
        <Dropdown
          placeholderText="Date"
          first="ascending"
          second="descending"
        />
        <Dropdown
          placeholderText="Region"
          first="North West"
          second="West Midlands"
          third="East Midlands"
          forth="London"
          fifth="South East"
          sixth="Other"
        />
        <Dropdown placeholderText="Assignee" first="Chris" second="Liz" />
        <Dropdown
          placeholderText="Status"
          first="Accepted"
          second="Pending"
          third="Rejected"
        />
        <Dropdown placeholderText="Interview" first="Yes" second="No" />
        <Dropdown placeholderText="Shortlisted" first="Yes" second="No" />
      </section>
      <section className="flex">
        <GenericInput
          className="w-1/4"
          size="sm"
          label="Search by"
          placeholderText="ID, E-mail"
        />
        <MainButton buttonText="Search" size="sm" />
      </section>
    </div>
  );
}
