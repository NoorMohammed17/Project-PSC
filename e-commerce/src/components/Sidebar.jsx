import React, { useState, useEffect } from 'react'
import { Checkbox, Stack, Heading } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { Radio, RadioGroup, Box, } from '@chakra-ui/react'

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategoryParams = searchParams.getAll('category')  // to make the URL not change after the reload

    const [category, setCategory] = useState(initialCategoryParams || []); //['men','women','jewelery','electronics']
    const initialSortParams = searchParams.get('order')
    const [order, setOrder] = React.useState(initialSortParams || null) //initiall null or data from initialSortParams
    console.log('sort order:', order)


    //to check the category present, and if already present uncheck it and remove from the array
    const handleFilter = (e) => {
        let newCategory = [...category];
        const value = e.target.value;
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value)
        } else {
            newCategory.push(value);
        }
        setCategory(newCategory)

    }
    console.log("Category:", category)
    console.log("searchParams.getAll:", searchParams.getAll("category"))
    console.log("searchParams.Sorting:", searchParams.get("order"))



    useEffect(() => {

        let params = {
            category,
        }

        order && (params.order = order) //if order present then only pass order 

        setSearchParams(params)

    }, [category, order])

    return (
        <Box
            pl={'40px'} pr={'40px'}
            m={'auto'}
            pt={'20px'}
            borderWidth='4px'
            h={'full'}
            w={{ base: 'full', md: 'full', sm: '80' }}
        // border={'1px solid red'}
        >
            <Heading as='h4' size='md' marginBottom={'20px'}>Filter By Category</Heading>
            <Stack spacing={1} direction={['row', 'row', 'column', 'column']}
             marginBottom={'20px'}>
                <Checkbox colorScheme='green' value={'men'} onChange={handleFilter} isChecked={category.includes('men')}>
                    Men's Clothing
                </Checkbox>
                <Checkbox colorScheme='green' value={'women'} onChange={handleFilter} isChecked={category.includes('women')}>
                    Women's Clothing
                </Checkbox>
                <Checkbox colorScheme='green' value={'jewelery'} onChange={handleFilter} isChecked={category.includes('jewelery')}>
                    Jewelery
                </Checkbox>
                <Checkbox colorScheme='green' value={'electronics'} onChange={handleFilter} isChecked={category.includes('electronics')}>
                    Electronics
                </Checkbox>
            </Stack>

            <Heading as='h4' size='md' marginBottom={'20px'}>Sort By Price</Heading>
            <RadioGroup onChange={setOrder} value={order}>

                <Stack
                    direction={['row', 'row', 'column', 'column']}
                    // direction={['row', 'column']} 
                    marginBottom={'20px'}>
                    <Radio value='asc' isChecked={order === 'asc'} >Ascending</Radio>
                    <Radio value='desc' isChecked={order === 'desc'}>Descending</Radio>

                </Stack>
            </RadioGroup>
        </Box>
    )
}

export default Sidebar;


//localhost:8080/host
