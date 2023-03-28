import React, {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from "../Redux/productsRedux/actions";
import ProductCard from './ProductCard';
import { Spinner, SimpleGrid, Heading, Box } from '@chakra-ui/react';
//import Pagination from './Pagination';

const ProductList = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, isLoading, isError } = useSelector(store => store.productsReducer);

    const location = useLocation()
    //const [activePage, setActivePage] = useState(1)

    // const handlePageChange = (newPageNumber)=> {
    //     setActivePage(newPageNumber)
    // }

    //console.log(searchParams.getAll('category'))

    let obj = {
        params: {
            category: searchParams.getAll('category'),
            _sort: searchParams.get('order') && 'price',
            _order: searchParams.get('order'),
            _limit:4,
            _page:searchParams.get('page') 

        }

    }

    useEffect(() => {
        dispatch(getProducts(obj));
    }, [location.search])

    if (isLoading) {
        return <Spinner
            position='fixed'
            z-index={1031}
            top='50%'
            left='50%'
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    }

    if (isError) {
        return (
            <Box >
                <Heading  position='fixed'
            z-index={1031}
            top='50%'
            left='50%'>Error...</Heading>
            </Box>
        )
    }
    console.log(products)

    return (
        <div>
               <SimpleGrid columns={[1, 2, 2, 4]} spacing='40px'
            marginLeft={{base: '10px',md: '50px'}}
        >
       
            {products.length > 0 &&
                products.map((el) => {
                    return <ProductCard key={el.id} {...el} />
                }
                )
            }
         
           
        {/* {products.length > 0 && products.filter((item, index) => {
         return index >= 4 * (activePage - 1) && index < 4 * activePage
        }).map(item => {
            return <ProductCard key={item.id} {...item} />
        })}
       
        
      
        <Flex justifyContent="center" p={6}>

        <Pagination productsLength={products?.length}
        perPage={4} activePage={activePage} handlePageChange={handlePageChange}/>
        </Flex> */}
        </SimpleGrid>
        </div>

    )
}

export default ProductList
