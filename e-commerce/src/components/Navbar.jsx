import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';
import CartPage from '../pages/cartPage';
//import Checkout from '../pages/Checkout';
//import PaymentPage from '../pages/PaymentPage';


const Navbar = () => {
  return (
    <DIV>
        <h3>Shopping App</h3>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
        <Link to='/edit'>Edit</Link>
        <Link to ="/checkout">Checkout</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/review">Review</Link> 
        <Link to="/final">Final</Link>
        <CartPage/>
      
    </DIV>
  )
}

export default Navbar

const DIV = styled.div`
    display:flex;
    width: 100%;
    font-size: large;
    font-weight: bold;
    align-items: center;
    border:1px solid teal;
    color:black;
    padding:10px;
    gap:30px;
    justify-content:flex-start;
  
`
