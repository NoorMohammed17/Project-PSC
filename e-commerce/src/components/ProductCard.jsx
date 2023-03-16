import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from '@chakra-ui/react';
import { editProduct } from '../Redux/productsRedux/actions';
import { useDispatch } from 'react-redux';



export default function ProductCard({ image, title, gender, price, id,rating }) {
    const dispatch=useDispatch()
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                cursor={'pointer'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${image})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'100%' }
                        src={image}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {title}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {gender}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {price}
                        </Text>
                        <Text textDecoration={'line-through'} color={'gray.600'}>
                            {rating.count}
                        </Text>
                    </Stack>
                </Stack>
                <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'teal.400'}
                                color={'white'}
                                onClick={() => {dispatch(editProduct(id))}}
                                _hover={{
                                    bg: 'teal.500',
                                }}>
                                Edit Product
                            </Button>
                        </Stack>
            </Box>
        </Center>
    );
}