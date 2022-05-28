import React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <Heading as="h1">Hello World!</Heading>
    </ChakraProvider>
  );
};

export default App;
