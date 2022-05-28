import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

const Layout = () => {
  return (
    <Box>
      <Nav />
      <Outlet />
    </Box>
  );
};

export default Layout;
