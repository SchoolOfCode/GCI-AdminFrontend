import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import MainButton from "../MainButton";


import React from "react";
import Dropdown from "../Dropdown";

export default function UserTable({ applications }) {
  return (
    <Table  size ="sm" variant="striped"  fontWeight="semibold">
      <TableCaption>View applications</TableCaption>
      <Thead>
        <Tr>
          <Th isNumeric>ID</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Stage</Th>
          <Th>Assignee</Th>
          <Th>Shortlisted</Th>
          <Th>View Applications</Th>
        </Tr>
      </Thead>
      <Tbody>
        {applications.map((application) => {
          return (
            <Tr>
              <Td isNumeric>{application.id}</Td>
              <Td>{application.first_name}</Td>
              <Td>{application.last_name}</Td>
              <Td>Stage: {application.current_stage}</Td>
              <Td>
                <Dropdown
                  label=""
                  placeholderText="Assignee"
                  first="Chris"
                  second="Liz"
                />
              </Td>
              <Td>
                {application.interview ? (
                  <StarIcon color="yellow.500" />
                ) : (
                  <StarIcon color="red" />
                )}
              </Td>
              <Td>
                <MainButton buttonText="View Application"></MainButton>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
