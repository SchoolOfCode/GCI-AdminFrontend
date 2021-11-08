import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import MainButton from "../MainButton";
import React, { useState, useEffect } from "react";
import Assignee from "../Assignee";
import { detectMob } from "../../functions/detectMob";
import { useWindowSize } from "../../hooks/useWindowSize";

export default function UserTable({ applications, setCurrentApplication }) {
  // for mobile interface usage
  const [isMobile, setIsMobile] = useState(false);
  const [width] = useWindowSize();
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setIsMobile(true);
    }
    if (width > 1080) {
      setIsMobile(false);
    }
  }, [width]);

  return isMobile === true ? (
    <section>
      <Table
        size="half"
        variant="striped"
        fontWeight="semibold"
        colorScheme="messenger"
      >
        <Thead>
          <Tr>
            <Th className="text-right">ID</Th>
            <Th className="text-center">Name</Th>
            <Th className="text-center">Stage</Th>
            <Th className="text-left">Assignee</Th>
            <Th className="text-right p-5">View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {applications.map((application) => {
            return (
              <Tr>
                <Td className="text-right">{application.id}</Td>
                <Td className="text-center break-words">
                  {application.first_name} {application.last_name}
                </Td>

                <Td className="text-center">{application.current_stage}</Td>
                <Td className="w-1/6">
                  <Assignee
                    label=""
                    placeholderText={application.assignee}
                    first="Chris"
                    second="Liz"
                    third="Loz"
                    fourth="Tao"
                    fifth="Arshi"
                    sixth="Hamza"
                    id={application.id}
                  />
                </Td>

                <Td className="text-right p-5">
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
    </section>
  ) : (
    <section>
      <Table
        size="half"
        variant="striped"
        fontWeight="semibold"
        colorScheme="messenger"
      >
        <Thead>
          <Tr>
            <Th isNumeric className="text-center">
              ID
            </Th>
            <Th className="text-center p-5">First Name</Th>
            <Th className="text-center">Last Name</Th>
            <Th className="text-center">Stage</Th>
            <Th className="text-left">Assignee</Th>
            <Th className="text-center">Shortlisted</Th>
            <Th className="text-center">Status</Th>
            <Th className="text-center">View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {applications.map((application) => {
            return (
              <Tr>
                <Td isNumeric className="text-center">
                  {application.id}
                </Td>
                <Td className="text-center p-5">{application.first_name}</Td>
                <Td className="text-center">{application.last_name}</Td>
                <Td className="text-center">
                  Stage: {application.current_stage}
                </Td>
                <Td className="w-1/6">
                  <Assignee
                    label=""
                    placeholderText={application.assignee}
                    first="Chris"
                    second="Liz"
                    third="Loz"
                    fourth="Tao"
                    fifth="Arshi"
                    sixth="Hamza"
                    id={application.id}
                  />
                </Td>
                <Td className="text-center">
                  {application.current_stage === 6 &&
                  application.status !== "Rejected" ? (
                    <StarIcon color="yellow.500" />
                  ) : (
                    <StarIcon color="silver" />
                  )}
                </Td>
                <Td>
                  {application.status === "Accepted" ? (
                    <p className="text-green-500 font-bold">
                      {application.status}
                    </p>
                  ) : application.status === "Rejected" ? (
                    <p className="text-red-500 font-bold">
                      {application.status}
                    </p>
                  ) : (
                    <p>{application.status}</p>
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
    </section>
  );
}
