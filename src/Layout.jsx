import { Box, Flex } from '@mantine/core';
import React from 'react'
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
    return (
      <Flex className=''>
        <Sidebar />
        <Box p={20}>{children}</Box>
      </Flex>
    );
  };

export default Layout