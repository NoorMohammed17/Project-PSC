import React, { useState, useEffect } from 'react'
import { Checkbox, Stack, Heading } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { Radio, RadioGroup } from '@chakra-ui/react'

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategoryParams = searchParams.getAll('category')  // to make the URL not change after the reload

    const [category, setCategory] = useState(initialCategoryParams || []); //['male', 'female','kids']
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
        <div>
            <Heading as='h4' size='md' marginBottom={'20px'}>Filter By Category</Heading>
            <Stack spacing={1} direction={['row', 'column']} marginBottom={'20px'}>
                <Checkbox colorScheme='green' value={'male'} onChange={handleFilter} isChecked={category.includes('male')}>
                    Men
                </Checkbox>
                <Checkbox colorScheme='green' value={'female'} onChange={handleFilter} isChecked={category.includes('female')}>
                    Women
                </Checkbox>
                <Checkbox colorScheme='green' value={'kids'} onChange={handleFilter} isChecked={category.includes('kids')}>
                    Kids
                </Checkbox>
            </Stack>

            <Heading as='h4' size='md' marginBottom={'20px'}>Sort By Price</Heading>
            <RadioGroup onChange={setOrder} value={order}>
                <Stack direction={['row', 'column']} marginBottom={'20px'}>
                    <Radio value='asc' isChecked={order === 'asc'} >Ascending</Radio>
                    <Radio value='desc' isChecked={order === 'desc'}>Descending</Radio>

                </Stack>
            </RadioGroup>
        </div>
    )
}

export default Sidebar;


//localhost:8080/host
