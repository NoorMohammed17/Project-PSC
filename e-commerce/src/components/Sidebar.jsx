import React, { useState,useEffect } from 'react'
import { Checkbox, Stack,Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';

const Sidebar = () => {
    const [searchParams, setSearchParams]=useSearchParams();
    const initialCategory = searchParams.getAll('category')  // to make the URL not change after the reload

    const [category, setCategory] = useState(initialCategory || []); //['male', 'female','kids']

    const handleChange = (e) => {
        let newCategory = [...category];
        const value = e.target.value;
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value)
        } else {
            newCategory.push(value);

        }
        setCategory(newCategory)
      
    }
    console.log("Category:",category)
    console.log("searchParams.getAll:",searchParams.getAll("category"))

    useEffect(() => {

        let params ={
            category,
        }
        setSearchParams(params)
    }, [category])
    return (
        <div>
            <Text>FilterBY</Text>
            <Stack spacing={1} direction='column'>
                <Checkbox colorScheme='green' value={'male'} onChange={handleChange} isChecked={category.includes('male')}>
                    Men
                </Checkbox>
                <Checkbox colorScheme='green' value={'female'} onChange={handleChange} isChecked={category.includes('female')}>
                    Women
                </Checkbox>
                <Checkbox colorScheme='green' value={'kids'} onChange={handleChange} isChecked={category.includes('kids')}>
                    Kids
                </Checkbox>
            </Stack>

        </div>
    )
}

export default Sidebar;


//localhost:8080/host
