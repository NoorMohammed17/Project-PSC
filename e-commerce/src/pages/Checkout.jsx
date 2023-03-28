import React from 'react'
import { Button,Stack,Box} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

const Checkout = () => {
    return (
        <div>
        <Stack width={'70%'} p={5} border={'1px solid gray'}>
           
            <Box p={3} bgColor={'black'} color={'white'} fontWeight={500} borderRadius={8}>1.Shipping</Box>
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />
            <Input placeholder='Basic usage' />


        </Stack>
        <Button colorScheme='blue' size={'md'}>Continue to Payment</Button>
        </div>
    )
}

export default Checkout
