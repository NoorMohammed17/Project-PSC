import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Navbar = () => {
  return (
    <DIV>
        <h3>Shopping App</h3>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/login">Login</Link>
      
    </DIV>
  )
}

export default Navbar

const DIV = styled.div`
    display:flex;
    width: 100%;
    align-items: center;
    border:1px solid teal;
    color:blue;
    padding:10px;
    justify-content: space-around;
    margin-bottom: 30px;
`
