import * as React from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <Heading className="text-4xl font-bold mb-5">Admin frontend!!</Heading>
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;
