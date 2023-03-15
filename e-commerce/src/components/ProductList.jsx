import React, { useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from "../Redux/productsRedux/actions";
import ProductCard from './ProductCard';
import { Spinner } from '@chakra-ui/react';

const ProductList = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { products, isLoading, isError } = useSelector(store => store.productsReducer);
    console.log(products)
    const location = useLocation()

    console.log(searchParams.getAll('category'))

    const obj = {
        params: {
            gender: searchParams.getAll('category'),
        }

    }

    useEffect(() => {
        dispatch(getProducts(obj));
    }, [location.search])

    if (isLoading) {
        return <Spinner
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

    return (
        <div>
            {products.length > 0 &&
                products.map((el) => {
                    return <ProductCard key={el.id} {...el} />
                })}

        </div>
    )
}

export default ProductList
