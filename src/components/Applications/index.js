import React, { useState } from "react";
import UserTable from "../UserTable";
import MainButton from "../MainButton";
import { Box } from "@chakra-ui/layout";

export default function Applications({ applications, currentPage, setCurrentPage }) {
  return (
    <Box border>
      <UserTable applications={applications} />
      <MainButton
        size="sm"
        buttonText="Previous Page"
        onClick={() => {
          if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
          }
        }}
      />
      "
      <MainButton
        size="sm"
        buttonText="Next Page"
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </Box>
  );
}
