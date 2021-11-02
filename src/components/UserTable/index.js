import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import MainButton from "../MainButton";
import React from "react";
import Dropdown from "../Dropdown";

export default function UserTable({ applications, setCurrentApplication }) {
  return (
    <Table  size ="sm" variant="striped"  fontWeight="semibold">
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
                <MainButton buttonText="View Application" onClick={()=>{setCurrentApplication(application)}}></MainButton>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
