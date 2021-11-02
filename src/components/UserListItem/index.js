import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Select,
  Button,
} from "@chakra-ui/layout";
import Dropdown from "../Dropdown";

// import { StarIcon } from "@chakra-ui/icons";

export default function UserListItem({ application }) {
  const { id, first_name, last_name, current_stage, interview } = application;

  console.log("test", id, first_name);

  return (
    <ListItem className="flex flex-row">
      <div>{id}</div>
      <div>{first_name}</div>
      <div>{last_name}</div>
      <div>{current_stage}</div>
      <Dropdown first="Chris" second="liz" third="Tao" />
    </ListItem>
  );
}
