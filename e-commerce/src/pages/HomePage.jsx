import React from 'react'
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import { Stack, Box,Divider } from '@chakra-ui/react';
import MetaData from '../components/MetaData';

const HomePage = () => {
  return (
    <div>
       <MetaData title={"eCommerce App (IN)"} />

      <Stack direction={['column', 'row']}>
        <Box>
          <Sidebar />

        </Box>

        <Divider borderColor={'red'}  orientation='vertical'/>

        <Box>
          <ProductList />
        </Box>

      </Stack>


    </div>
  )
}

export default HomePage
