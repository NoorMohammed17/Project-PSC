import React,{useState} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/auth/actions';
import { Spinner} from '@chakra-ui/react'

const Login = () => {
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const dispatch= useDispatch();
    const {auth,isLoading,isError} = useSelector(store => store.authReducer)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };

        dispatch(login(userData))
        setEmail('');
        setPassword('');

        
    }

    if(isLoading){
        return <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    }

    if(isError){
        return <h1>Error....</h1>
    }


  return (
    <DIV>
        <h2> User Login</h2>
        <h3>{auth? "Login Successful! " : 'Login to Continue...'}</h3>
        <form  onSubmit ={handleSubmit}>
            
            <input type="email"  placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password"   placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button type="submit">Log In</button>
        </form>
      
    </DIV>
  )
}

export default Login

const DIV = styled.div `
    width:400px;
    margin:auto;
    border:2px solid teal;
    border-radius: 20px;
    padding:20px 20px 40px 20px;
    text-align: center;
    h3{
        color:red;
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
        border-radius: 10px;
        
    }
    button{
        width:80%;
        height:40px;
        font-size:large;
        border-radius:8px;
        color:white;
        background-color: teal;
        border:none;

    }
`
