import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
  Text,
  useColorModeValue,

} from '@chakra-ui/react';
import { useState } from 'react';
import { addProduct } from '../Redux/productsRedux/actions';

import {  useDispatch } from 'react-redux';


const initialState = {
  image :'',
  title:'',
  price:'',
  description:'',
  category:'',
  rating:{
    rate:'',
    count:'',
  },
}

export default function AdminPage() {


  const [data, setData] = useState(initialState);
  const dispatch = useDispatch()
  

  const handleChange = (e) => {
  
    const { name, value } = e.target;
    setData(prev => {
      return { ...prev, [name]: value }
    })
    console.log(name, value)
  };

  const handleAdd = () => {
  
    console.log(data)
    dispatch(addProduct(data));
    setData(initialState);
  }

  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Text textAlign={'center'} fontSize={'xl'} fontWeight={'bold'}>Add Product</Text>

            <FormControl >
              <Box mt={'10px'} >
                <FormLabel>Image</FormLabel>
                <Input type="text"  placeholder ='Image URL' onChange={(e) => {handleChange(e)}} name='image' value={data.image} />
              </Box>

              <Box mt={'10px'}>
                <FormLabel>Title</FormLabel>
                <Input type="text"   placeholder ='Title' onChange={(e) => {handleChange(e)}} name='title' value={data.title} />
              </Box>

              <Box mt={'10px'} >
                <FormLabel>Price</FormLabel>
                <Input type="number" placeholder ='Price' onChange={(e) => {handleChange(e)}} name='price' value={data.price} />
              </Box>

              <Box mt={'10px'}>
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select Category' onChange={(e) => {handleChange(e)}} name='category' value={data.category} >
                  <option value='men'>Men's Clothing</option>
                  <option value='women'>Women's CLothing</option>
                  <option value='jewelery'>Jewelery</option>
                  <option value='electronics'>Electronics</option>
                </Select>
              </Box>

              <Box mt={'10px'} >
                <FormLabel>Description</FormLabel>
                <Input type="text" placeholder ='Description' onChange={(e) => {handleChange(e)}} name='description' value={data.description} />

              </Box>
              <Box mt={'10px'} >
                <FormLabel>Number of Ratings </FormLabel>
                <Input type="number" onChange={(e) => {handleChange(e)}} name='rating.count' value={data.rating.count} />

              </Box>
              <Box mt={'10px'} >
                <FormLabel>Stars Count</FormLabel>
                <Input type="number" onChange={(e) => {handleChange(e)}} name='rating.rate' value={data.rating.rate} />

              </Box>

              <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleAdd}>
                  Add Product
                </Button>
              </Stack>
            </FormControl>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}