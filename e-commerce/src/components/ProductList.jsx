import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from "../Redux/productsRedux/actions";
import ProductCard from './ProductCard';
import { Spinner, SimpleGrid } from '@chakra-ui/react';

const ProductList = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, isLoading, isError } = useSelector(store => store.productsReducer);

    const location = useLocation()

    //console.log(searchParams.getAll('category'))

    let obj = {
        params: {
            gender: searchParams.getAll('category'),
            _sort:searchParams.get('value')
            
        }

    }

    useEffect(() => {
        dispatch(getProducts(obj));
    }, [location.search])

    if (isLoading) {
        return <Spinner
            margin={'auto'}
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        />
    }

    if (isError) {
        return <h1>Error....</h1>
    }
    console.log(products)

    return (
        <SimpleGrid columns={[2, null, 4]} spacing='40px' marginLeft={'100px'}>
            {products.length > 0 &&
                products.map((el) => {
                    return <ProductCard key={el.id} {...el} />
                }
                )
            }

        </SimpleGrid>
    )
}

export default ProductList
