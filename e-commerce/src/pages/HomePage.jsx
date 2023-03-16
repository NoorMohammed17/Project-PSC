import React from 'react'
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import { Stack, Box } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <div>

      <Stack direction={['column', 'row']}>
        <Box>
          <Sidebar />

        </Box>
        <Box>
          <ProductList />
        </Box>

      </Stack>


    </div>
  )
}

export default HomePage
