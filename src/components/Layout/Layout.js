import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} minH="100vh">
      <Nav />
      <Outlet />
    </Box>
  );
};

export default Layout;
