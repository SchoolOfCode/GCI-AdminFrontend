import React, { useState, useEffect } from "react";
import { Select, FormControl } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";
//takes in up to 6 options and placeholder text and props.
// if more options are needed, then add more props here.

export default function Dropdown({
  role,
  placeholderText = "select option",
  first = "",
  second = "",
  third = "",
  forth = "",
  fifth = "",
  sixth = "",
  seventh = "",
  m = "m-0",
  nowUpdated,
  setNowUpdated,
}) {
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

  //state to hold the value
  const [option, setOption] = useState("");

  //function to capture the selected value
  const handleSelect = (e) => {
    setOption(e.target.value);
    setNowUpdated(nowUpdated + 1);
    console.log("my value is " + e.target.value);
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
        width={w}
        variant="filled"
        placeholder={placeholderText}
        onChange={handleSelect}
        className={role + " " + m}
        value={option}
      >
        {list.map((i) => {
          return <option value={i.value}>{i.value}</option>;
        })}
      </Select>
    </FormControl>
  );
}
