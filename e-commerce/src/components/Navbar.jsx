import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components';


const Navbar = () => {
  return (
    <DIV>
        <h3>Shopping App</h3>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/login">Login</Link>
        <Link to="/admin">Admin</Link>
      
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
    margin-bottom: 30px;
`
