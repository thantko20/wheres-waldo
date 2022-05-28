import React from 'react';
import { Heading, HStack } from '@chakra-ui/react';

const Logo = () => {
  return <Heading as="h1">Where's Waldo?</Heading>;
};

const Nav = () => {
  return (
    <HStack>
      <Logo />
    </HStack>
  );
};

export default Nav;
