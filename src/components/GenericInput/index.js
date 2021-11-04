import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { detectMob } from "../../functions/detectMob";
import { useWindowSize } from "../../hooks/useWindowSize";

//takes in the label for the input as a prop. This can be just a label or a question to the user

export default function GenericInput({
  role,
  placeholderText = "Please type your answer here...",
  m = "m-0",
  nowUpdated,
  setNowUpdated,
}) {
  //state to hold the value
  const [text, setText] = useState("");

  //function to capture the selected value
  const handleChange = (e) => {
    setText(e.target.value);
    setNowUpdated(nowUpdated + 1);
  };

  // for mobile interface usage
  const [width, height] = useWindowSize();
  const [widthBox, setWidthBox] = useState("40%");
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setWidthBox("100%");
    }
    if (width > 1080) {
      setWidthBox("40%");
    }
  }, [width]);

  return (
    <FormControl className={m}>
      <Input
        type="text"
        placeholder={placeholderText}
        value={text}
        onChange={handleChange}
        className={role}
        size="md"
        width={widthBox}
      />
    </FormControl>
  );
}
