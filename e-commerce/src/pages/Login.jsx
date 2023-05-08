import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/authRedux/actions';
import { Spinner,Box,Heading } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { auth, isLoading, isError } = useSelector(store => store.authReducer);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };

        dispatch(login(userData)).then(() => {
            navigate(location.state, { replace: true })
        })
        setEmail('');
        setPassword('');


    }

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
        return <Box >
        <Heading  position='fixed'
    z-index={1031}
    top='50%'
    left='50%'>Error...</Heading>
    </Box>
    }


    return (
        <DIV auth={auth}>
            <h1> User Login</h1>
            <h3>{auth ? "Login Successful! " : 'Login to Continue...'}</h3>
            <form onSubmit={handleSubmit}>

                <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>

        </DIV>
    )
}

export default Login

const DIV = styled.div`
    width:400px;
    margin:auto;
    /* border:2px solid teal; */
    border-radius: 8px;
    padding:20px 20px 40px 20px;
    text-align: center;
    margin-top:30px;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
    h1{
        color:orange;
        font-size: 24px;
        font-weight: bold;
    }

    h3{
        margin:10px;
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 30px;
        color: ${({ auth }) => (auth ? 'green' : 'red')}
    }

    form{
        display:flex;
        flex-direction: column;
        gap:15px;
        align-items: center;
    }
    input {
        width:80%;
        height:40px;
        font-size:large;
        border-radius: 5px;
        border:2px solid orange;
        
    }
    button{
        width:80%;
        height:40px;
        font-size:large;
        border-radius:5px;
        color:white;
        background-color: teal;
        border:none;

    }
`
