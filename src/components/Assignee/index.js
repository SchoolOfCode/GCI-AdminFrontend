import React, { useState, useEffect } from "react";
import { Select, FormControl } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";
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
  // for mobile interface usage
  const [width] = useWindowSize();
  const [w, setW] = useState("60%");
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setW("100%");
    }
    if (width > 1080) {
      setW("60%");
    }
  }, [width]);

  return (
    <FormControl>
      <Select
        width={w}
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
