import React from 'react'
import { Button, Stack, Box, Text } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Select, FormControl, FormLabel, Switch, Radio,  } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Heading, Spacer } from '@chakra-ui/react'


const Checkout = () => {
    return (
        <div>
            <Box p={3} bgColor={'black'} color={'white'} fontWeight={500} borderRadius={5} width={'70%'} mb={'20px'}>1. Shipping</Box>


            <Stack width={'70%'} p={5} border={'1px solid gray'} mb={'20px'}>
                <Text fontWeight={'500'} fontSize={'xl'} mb={'15px'}>Shipping by Vastram</Text>

                <Text fontWeight={'bold'}>First Name</Text>
                <Input placeholder='' borderRadius={'none'} />

                <Text fontWeight={'bold'}>Last Name</Text>
                <Input placeholder='' borderRadius={'none'} />

                <Text fontWeight={'bold'}>Address Line 1</Text>
                <Input placeholder='Start typing an address...' borderRadius={'none'} />

                <Text fontWeight={'bold'}>Address Line 2</Text>
                <Input placeholder='Apt/Suite/Floor(optional)' borderRadius={'none'} />

                <Flex alignItems={'center'} justifyContent={'space-between'} width={'70%'}>
                    <Text fontWeight={'bold'}>City</Text>
                    <Text fontWeight={'400'} color={'blue'} as='u' >APO/FPO</Text>
                </Flex>
                <Input placeholder='' width={'70%'} borderRadius={'none'} />

                <Text fontWeight={'bold'}>State</Text>
                <Select placeholder='Select' border={'1px solid black'} borderRadius={'none'} width={'70%'}>
                    <option value='andhrapradesh'>Andhra Pradesh</option>
                    <option value='mumbai'>Mumbai</option>
                    <option value='gujarat'>Gujarat</option>
                </Select>



                <Text fontWeight={'bold'}>Zip Code</Text>
                <Input placeholder='' width={'70%'} borderRadius={'none'} />


                <Flex alignItems={'center'} justifyContent={'space-between'} width={'70%'}>
                    <Text fontWeight={'bold'}>Phone Number</Text>
                    <Text fontWeight={'400'} color={'blue'} as='u' >Why is this required?</Text>
                </Flex>
                <Input placeholder='' width={'70%'} borderRadius={'none'} mb={'20px'} />

                <FormControl display='flex' alignItems='center' >
                    <Switch id='default-alerts' />
                    <FormLabel htmlFor='default-alerts' ml='10px' >
                        This is my default
                    </FormLabel>
                </FormControl>


            </Stack>
            

            <Stack width={'70%'} p={0} border={'1px solid gray'} mb={'20px'}>
                <Card>
                    <CardHeader>
                        <Heading size='md'>Shipping Method</Heading>
                    </CardHeader>

                    <CardBody>
                        <Stack spacing='5'>
                            <Box>
                                <Flex>
                                    <Radio size='lg' value='1' ></Radio>
                                    <Box ml='3'>

                                        <Text fontWeight='bold'>
                                            Standard :<Text as='del'> $9.95 </Text>FREE - Free Shipping @ $59
                                           
                                        </Text>
                                        <Text fontSize='sm'>Est. Delivery:
                                         Mar 31 - Apr 07</Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex>
                                    <Radio size='lg' value='1'></Radio>
                                    <Box ml='3'>

                                        <Text fontWeight='bold'>
                                           Express: $24.95
                                            
                                        </Text>
                                        <Text fontSize='sm'>Est. Delivery: Mar 31 </Text>
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Flex>
                                    <Radio size='lg' value='1'></Radio>
                                    <Box ml='3'>

                                        <Text fontWeight='bold'>
                                          Overnight: $29.95
                                            
                                        </Text>
                                        <Text fontSize='sm'>Est. Delivery: Mar 30 </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </Stack>
                    </CardBody>
                </Card>
            </Stack>
            <Flex width={'70%'} alignItems={'center'} >
            <Spacer /><Button colorScheme='blue' size={'lg'}>Continue to Payment</Button></Flex>

            
        </div>
    )
}

export default Checkout
