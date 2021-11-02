import { Button } from "@chakra-ui/react";
import React from "react";

// button to be used for any needs
export default function MainButton({
  onClick,
  buttonColor = "#4A90E2",
  textColor = "white",
  buttonText = "CLICK ME!",
  m = "m-0",
}) {
  return (
    <Button
      className={m}
      onClick={onClick}
      bg={buttonColor}
      color={textColor}
      size="lg"
      _hover={{ bg: "#000818" }}
      _active={{
        transform: "scale(0.75)",
      }}
    >
      {buttonText}
    </Button>
  );
}
