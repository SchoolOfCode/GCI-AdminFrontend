import { Heading, Image, Flex } from "@chakra-ui/react";
import React from "react";

export default function Header({
  text = "School of Code Application Portal",
  textColor = "#000818",
  textSize = "2xl",
  bgColor = "white",
  className = "m-5",
}) {
  return (
    <Flex className={className} align="center" justify="center">
      <Image
        className="m-5"
        display="flex"
        boxSize="120px"
        src="https://i.imgur.com/TsMzmXK.png"
        alt="school of code logo"
      />

      <Heading as="h1" size={textSize}>
        {text}
      </Heading>
    </Flex>
  );
}
