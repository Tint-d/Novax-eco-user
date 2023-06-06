import { Box, Flex } from '@mantine/core';
import React from 'react'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
    return (
      <Flex className=''>
        <Sidebar />
        <Navbar/>
        <Box p={20}>{children}</Box>
      </Flex>
    );
  };

export default Layout