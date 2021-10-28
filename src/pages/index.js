import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// markup
const IndexPage = () => {
  return (
    <ChakraProvider>
      <main>
        <h1>Hello</h1>
      </main>
    </ChakraProvider>
  );
};

export default IndexPage;
