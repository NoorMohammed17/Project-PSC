import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Tag,
    TagLabel
} from '@chakra-ui/react';
import { Link } from "react-router-dom"
import { BsStarFill } from 'react-icons/bs';
//import { editProduct } from '../Redux/productsRedux/actions';
//import { useDispatch } from 'react-redux';



export default function ProductCard({ image, title, category, price, id, rating }) {
    //const dispatch = useDispatch()

    // const singlePageHandler = () => {
    //     console.log(id)
    //     dispatch(editProduct(id))
    // }
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
                    height={'270px'}
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
                        height={270}
                        width={282}
                        objectFit={'100%'}
                        src={image}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'pink.700'} fontSize={'.5xl'} textTransform={'uppercase'} noOfLines={1} fontWeight={600}>
                        {title}
                    </Text>
                    <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={500}>
                        {category}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={600} fontSize={'xl'}>
                            $ {price}
                        </Text>

                    </Stack>

                    <Stack direction={'row'} align={'center'} justifyContent={'space-around'}>
                        <Tag size='lg' colorScheme='teal' borderRadius='full'>
                            <BsStarFill />
                            <TagLabel ml={'5px'}>{rating.rate}</TagLabel>
                        </Tag>

                        <Stack direction={'row'} align={'center'} >
                            <Text fontWeight={600} fontSize={'.5xl'}>
                                {rating.count}
                            </Text>
                            <Text fontWeight={600} fontSize={'.5xl'}>
                                Ratings
                            </Text>

                        </Stack>
                    </Stack>




                </Stack>
                <Stack spacing={10} pt={2} >
                    
                        <Button as={Link} to={`/products/${id}`}
                            loadingText="Submitting"
                            size="lg"
                            m={'auto'}
                            bg={'teal.400'}
                            color={'white'}
                            //onClick={singlePageHandler  }
                            _hover={{
                                bg: 'teal.500',
                            }}>
                            View Details
                        </Button>
                   
                </Stack>
            </Box>
        </Center>
    );
}