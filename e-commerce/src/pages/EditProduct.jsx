import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,

    Stack,
    Button,
    
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useState,useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import {editProduct } from '../Redux/productsRedux/actions';

export default function EditProduct() {
  
    const { id } = useParams();
    const [data, setData] = useState('');
    const product = useSelector((store) => store.productsReducer.products);
    const dispatch=useDispatch();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData(prev => {
            return {...prev, [name]:value}
        })
        console.log(name, value)
    };

    const handleEdit = (e) => {
        e.preventDefault();
        dispatchEvent(editProduct(data,id)).then(() => {
            setSuccess(true)
        })
    }

    useEffect(() => {
        const data = product.find((el) => el.id === +id);
        console.log(data);
        setData(data);
        console.log(id)
    }, [])

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

                        <FormControl id="image" isRequired>
                            <FormLabel>Image</FormLabel>
                            <Input type="text"  onChange={handleChange} name='image' value={data.image} />
                        </FormControl>
                        <FormControl id="title" isRequired>
                            <FormLabel>Title</FormLabel>
                            <Input type="text"  onChange={handleChange} name='title' value={data.title}/>
                        
                        </FormControl>
                        <FormControl id="price" isRequired>
                            <FormLabel>Price</FormLabel>
                            <Input type="number" onChange={handleChange} name='price' value={data.price} />
                        
                        </FormControl>
                        <FormControl id="brand" isRequired>
                            <FormLabel>Brand</FormLabel>
                            <Input type="text"  onChange={handleChange} name='brand' value={data.brand}/>
                        
                        </FormControl>
                        <FormControl id="discount" isRequired>
                            <FormLabel>Discount</FormLabel>
                            <Input type="number" onChange={handleChange} name='discount' value={data.discount} />
                        
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Edit Product
                            </Button>
                        </Stack>
                        
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}