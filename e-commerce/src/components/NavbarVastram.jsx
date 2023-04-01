import React from 'react';
import { Stack, Box, Flex, Text,HStack,Circle,Divider } from '@chakra-ui/react';
import { FaCheck } from "react-icons/fa";

const image = 'https://raw.githubusercontent.com/Pankaj-bit361/-vigorous-ticket-1895/main/vastram/src/Image/HD-Logo.png?token=GHSAT0AAAAAAB7ITQ5H66O5VXZ56VLUVLOQZBIOLLQ'

const NavbarVastram = () => {
    return (
        <Stack border='2px solid pink' direction={['column','row']} spacing={'25px'}>
            <Flex width={{base:'30%', lg:'30%'}} justify={{ base: "center", lg: "flex-start" }}> <img src={image} alt={'logo'} width={'80%'} height={30} /></Flex>
            <Box width={{base:'100%', lg:'70%'}} border={'1px solid red'} position={'relative'}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontWeight={'600'}>Shipping</Text>
                    <Text fontWeight={'600'}>Payment</Text>
                    <Text fontWeight={'600'}>Review Order</Text>
                </Flex>
                <HStack  justifyContent={'space-between'} alignItems={'center'}  position="relative" mr={'35px'} ml={'12px'} >
                <Divider colorScheme='blackAlpha' borderColor="black.400" position={'fixed'} 
                //w={{lg:'59%',mdbase:'45%'}} 
                 w={["45%","42%","58%","58%"]}
                 ml={'48px'} />
                    <Circle size='40px' bg='black' color='white'  >
                    <FaCheck />
                    </Circle>
                    
                    <Circle size='40px' bg='black' color='white'  >
                       2
                    </Circle>
                    <Circle size='40px' bg='black' color='white'  >
                       3
                    </Circle>
                </HStack>
            </Box>


        </Stack>
    )
}

export default NavbarVastram
