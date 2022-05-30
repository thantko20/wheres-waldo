import { Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      minH="100vh"
      direction="column"
    >
      <Nav />
      <Outlet />
    </Flex>
  );
};

export default Layout;
