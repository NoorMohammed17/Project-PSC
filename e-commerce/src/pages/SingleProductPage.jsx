import {
  Box,
  Button,
  Heading,
  Spinner,
  useToast,
  Text,

  Flex,

  Image,
  Stack,

  useBreakpointValue,

} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { postCartRequest } from "../Redux/cartRedux/actions";
import { useDispatch } from "react-redux";




const SingleProductPage = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id)
  const toast = useToast();

  const [isButLoading, setIsButLoading] = useState(false);

  const dispatch = useDispatch();
  function AddToCart() {
    dispatch(postCartRequest(data));
    setIsButLoading(true);
    setTimeout(() => {
      setIsButLoading(false);
      toast({
        title: "Added to Cart",
        description: "Product successfully added",
        status: "success",
        duration: 2500,
        variant: "left-accent",
        isClosable: true,
        position: "top",
      });
      navigate("/cart");
    }, 2000);
  }
  // function handleBuy() {
  //   dispatch(postCartRequest(data));
  //   toast({
  //     title: "Added to Cart",
  //     description: "Product successfully added",
  //     status: "success",
  //     duration: 2500,
  //     isClosable: true,
  //     variant: "left-accent",
  //     position: "top",
  //   });
  //   navigate("/cart");
  // }
  // const handleDelivery = () => { };



  useEffect(() => {
    axios.get(`http://localhost:8080/products/${id}`)
      .then((res) => {
        setData(res.data)
        console.log(data)
      })

  }, [])


  console.log(data)
  // const { images, image, title, price, rating } = data

  // const [img, setImg] = useState("")


  return (
    <>

      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              data.image
            }
          />
        </Flex>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                {data.title}
              </Text>
              <br />{' '}
              {/* <Text color={'blue.400'} as={'span'} mt={'30px'}>
                Description
              </Text>{' '} */}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              {data.description}
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
              Price : $ {data.price}
            </Text>

            {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
               Rating : {data.rating.rate}
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
               Items Remaining : {data.rating.count}
            </Text> */}
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                onClick={AddToCart}
                _hover={{
                  bg: 'blue.500',
                }}>
                {!isButLoading && `Add to Cart`}
                {isButLoading && (
                  <Spinner
                    thickness="4px"
                    speed="0.55s"
                    emptyColor="gray.200"
                    color="#17274a"
                    size="sm"
                  />
                )}
              </Button>
              <Button rounded={'full'}>Back </Button>
            </Stack>
          </Stack>
        </Flex>

      </Stack>





    </>
  );
};

export default SingleProductPage;