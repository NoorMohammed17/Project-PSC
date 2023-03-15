import React, { useState, useEffect } from 'react'
import { Checkbox, Stack, Heading } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { Radio, RadioGroup } from '@chakra-ui/react'

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category')  // to make the URL not change after the reload

    const [category, setCategory] = useState(initialCategory || []); //['male', 'female','kids']
    const initialSort = searchParams.get('value')
    const [value, setValue] = React.useState(initialSort || null )
    console.log('Value:',value)

    //const []

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
    console.log("searchParams.Sorting:", searchParams.get("value"))
    


   

    useEffect(() => {

        let params = {
            category,
            value,
        }
        setSearchParams(params)
    }, [category,value])
    return (
        <div>
            <Heading marginBottom={'20px'}>Filter By</Heading>
            <Stack spacing={1} direction='column' marginBottom={'20px'}>
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

            <Heading marginBottom={'20px'}>Sort By</Heading>
            <RadioGroup onChange={setValue} value={value}  >
                <Stack direction='column' marginBottom={'20px'}>
                    <Radio value='asc'>Ascending</Radio>
                    <Radio value='desc'>Descending</Radio>
                  
                </Stack>
            </RadioGroup>
        </div>
    )
}

export default Sidebar;


//localhost:8080/host
