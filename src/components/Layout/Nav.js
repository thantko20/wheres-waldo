import React from 'react';
import { Heading, HStack, Stack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Heading as="h1">
      <Link to="/">Where's Waldo?</Link>
    </Heading>
  );
};

const Nav = () => {
  return (
    <Stack
      as="nav"
      bg="gray.700"
      direction="row"
      justify="space-between"
      p={[6, 4]}
    >
      <Logo />
      <HStack>
        <Box>Hi</Box>
      </HStack>
    </Stack>
  );
};

export default Nav;
