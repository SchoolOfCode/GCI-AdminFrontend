import React, { useState } from "react";
import { Select, FormControl, FormLabel } from "@chakra-ui/react";
const axios = require("axios").default;

export default function Assignee({
  role,
  placeholderText = "Assignee",
  first = "",
  second = "",
  third = "",
  forth = "",
  fifth = "",
  sixth = "",
  seventh = "Not assigned",
  m = "m-0",
  id,
}) {
  //state to hold the value
  const [person, setPerson] = useState("");

  //function to capture the selected value
  const handleSelect = (e) => {
    setPerson(e.target.value);
    if (e.target.value === "Not assigned") {
      axios
        .patch(
          `https://gci-backend.herokuapp.com/users/${id}?column=assignee`,

          { assignee: "Not assigned" }
        )
        .then(console.log(`user ${id} assigned to ${e.target.value}`));
    } else {
      axios
        .patch(
          `https://gci-backend.herokuapp.com/users/${id}?column=assignee`,

          { assignee: e.target.value }
        )
        .then(console.log(`user ${id} assigned to ${e.target.value}`));
    }
  };

  let array = [first, second, third, forth, fifth, sixth, seventh];
  let list = [];
  array.forEach(function (e) {
    if (e.length > 1) {
      list.push({ label: e, value: e });
    }
  });

  return (
    <FormControl>
      <Select
        width="50%"
        variant="filled"
        placeholder={placeholderText}
        onChange={handleSelect}
        className={role + " " + m}
        value={person}
      >
        {list.map((i) => {
          return <option value={i.value}>{i.value}</option>;
        })}
      </Select>
    </FormControl>
  );
}
