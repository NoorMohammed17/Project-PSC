import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  Select,
  Stack,
  ListItem,
  HStack,
  useColorModeValue,
  Image,
  Flex,
  Spacer,
  SimpleGrid,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons'
import OrderSummary from './OrderSummary';
import { FiGift } from 'react-icons/fi'
import { Link } from "react-router-dom"
//import ArrowUp from '../ArrowUp';
import { useDispatch, useSelector , shallowEqual} from 'react-redux';
import {
  deleteCartdata,
  getCartProducts,
} from "../Redux/cartRedux/actions";



export const PackageTier = ({ item, handlePlus, handleMinus, HandleCartDelete }) => {
  // const { isAuth, token } = useSelector((state) => state.user)

  return (
    <>
      <Stack py={{
        lg: '5rem',
        md: '0.5rem',
        sm: "2rem"
      }}
        px={{
          lg: '1rem',
          md: '0.5rem',
          sm: "2rem"
        }}
        spacing="10" width={{ lg: "full", md: "100%" }}
        textAlign={'start'}
        direction={{ base: 'column', md: 'row' }}
        boxShadow='2xl'>
        <Image
          rounded="lg"
          width={{ lg: "150px", md: "150px", sm: "100%" }}
          height="150px"
          fit="cover"
          src={item.image}
          alt={'cart'}
          draggable="false"
          loading="lazy"
          margin={'auto'}
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">Title: {item.title}</Text>
            <Text fontWeight="medium">Category: {item.category}</Text>
            <Text color={('gray.600', 'gray.400')} fontSize="sm">
              Description: {item.description}
            </Text>
          </Stack>

          <HStack spacing="1" mt="3" color={('gray.600', 'gray.400')}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        </Box>
        <Box display='flex' alignItems='center' justifyContent={'center'} gap={2}>
          <Button onClick={() => handlePlus(item._id)}>+</Button>
          <Box as='span'>
            {item.quantity}
          </Box>
          <Button disabled={item.quantity == 1} onClick={() => handleMinus(item._id)}>-</Button>
        </Box>
        <Stack justifyContent={'center'} textAlign={'center'}>
          <Heading size={'1xl'}>₹{item.price * item.quantity}</Heading>
        </Stack>
        <Stack justifyContent={'center'}>
          <Button
            size="md"
            color={useColorModeValue('black', 'white')}
            bg={useColorModeValue('white', 'gray.800')}
            onClick={() => HandleCartDelete(item._id)}
          >
            <CloseIcon />
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

const Cart = () => {



  const [quantity1,setquantity] =useState(1)

    const navigate = useNavigate();
    const [isButLoading, setIsButLoading] = useState(false);
    const toast = useToast();

    const { cart, isLoading, isError } = useSelector((store) => {
        return {
            cart: store.cartReducer.cart,
            isLoading: store.cartReducer.isLoading,
            isError: store.cartReducer.isError,
        };
    }, shallowEqual);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartProducts());
    }, []);

//    let totalprice=0;
//    for(var i=0;i<products.length;i++){
//     if(quantity1[i]===undefined){
//         totalprice+=+products[i].price
       
//     }else{
//         totalprice+=+products[i].price*(+quantity1[i])
//         console.log(quantity1[i])
//     }
// console.log(products[i].price,quantity1[i])
    
//    }

    function HandleCartDelete(id) {
        dispatch(deleteCartdata(id)).then(() => {
            dispatch(getCartProducts());
        });
    }

    // const handleCheckout = () => {
    //     setIsButLoading(true);
    //     setTimeout(() => {
    //         setIsButLoading(false);
    //         toast({
    //             title: "Please Add Your Address ",
    //             description: "We need your shipping details for delivery ",
    //             status: "info",
    //             variant: "left-accent",
    //             duration: 2500,
    //             isClosable: true,
    //             position: "top",
    //         });
    //         navigate("/checkout");
    //     }, 2000);
    // };

    
  const handleMinus = (id, token) => {
    dispatch(changeCartItems(id, "minus"))
  }
  const handlePlus = (id, token) => {
    dispatch(changeCartItems(id, "plus"))
  }



  return (
    <>
      <Flex
        // border={'2px solid red'}
        py={{
          lg: '5rem',
          md: '5rem',
        }}
        px={{
          lg: '1rem',
          md: '5rem',
          sm: "1rem"
        }}
        justifyContent={{
          base: 'flex-start',
          md: 'space-between',
          lg: 'space-arround',
        }}
        direction={{
          base: 'column',
          lg: 'row',
          md: 'column',
          sm: 'column',
        }}
        gap={15}
        m={'auto'}
      >

        <SimpleGrid
          direction={['row', 'column']}
          cursor={'pointer'} >
          <Stack spacing={4} width={'auto'} direction={'column'}>
            <VStack
              justifyContent={{
                base: 'flex-start',
                md: 'space-between',
              }}
              direction={{
                base: 'column',
                md: 'row',
              }}
              alignItems={'start'}
            >
              <Stack  >
                <Heading size={'lg'}>
                  Cart  Items:  <span style={{ color: "#E80070" }}>{cartItems?.length}</span>
                </Heading>
              </Stack>
            </VStack>
            {/* Passing data props */}
            {
              cartItems?.map((el, i) => {
                console.log(el)
                return <PackageTier item={el} handlePlus={handlePlus} handleMinus={handleMinus} key={i} handledeleteitem={handledeleteitem} />
              })
            }
          </Stack>
          <Divider />
        </SimpleGrid>

        <Flex direction="column" align={{ lg: "end", md: 'center', sm: 'center' }} flex="1"  >
          <OrderSummary />
          <HStack fontWeight="semibold">
            <p>or</p>
            <Link color={('blue.500', 'blue.200')} to={'/'}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Flex>
      {/* <ArrowUp /> */}
    </>
  );
};

export default Cart;