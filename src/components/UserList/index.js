import React from "react";
import { OrderedList } from "@chakra-ui/layout";
import UserListItem from "../UserListItem";

export default function UserList({ applications }) {
  console.log("user list applications", applications);

  return (
    <OrderedList className="flex flex-col">
      {applications.map((application) => {
        return <UserListItem application={application} />;
      })}
    </OrderedList>
  );
}
