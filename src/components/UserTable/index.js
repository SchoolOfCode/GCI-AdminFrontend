import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import MainButton from "../MainButton";
import React from "react";
import Dropdown from "../Dropdown";

export default function UserTable({ applications, setCurrentApplication }) {
  return (
    <Table
      size="half"
      variant="striped"
      fontWeight="semibold"
      colorScheme="messenger"
    >
      <Thead>
        <Tr>
          <Th className="text-center">ID</Th>
          <Th className="text-center">First Name</Th>
          <Th className="text-center">Last Name</Th>
          <Th className="text-center">Stage</Th>
          <Th className="text-left">Assignee</Th>
          <Th className="text-center">Short listed</Th>
          <Th className="text-center">View</Th>
        </Tr>
      </Thead>
      <Tbody>
        {applications.map((application) => {
          return (
            <Tr>
              <Td className="text-center">{application.id}</Td>
              <Td className="text-center">{application.first_name}</Td>
              <Td className="text-center">{application.last_name}</Td>
              <Td className="text-center">
                Stage: {application.current_stage}
              </Td>
              <Td className="w-1/6">
                <Dropdown
                  label=""
                  placeholderText="Assignee"
                  first="Chris"
                  second="Liz"
                />
              </Td>
              <Td className="text-center">
                {application.interview ? (
                  <StarIcon color="yellow.500" />
                ) : (
                  <StarIcon color="red" />
                )}
              </Td>
              <Td className="text-center">
                <MainButton
                  buttonText="View"
                  size="sm"
                  onClick={() => {
                    setCurrentApplication(application);
                  }}
                ></MainButton>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
}
