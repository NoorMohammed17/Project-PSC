import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { auth } = useSelector((store) => store.authReducer);
    const loaction = useLocation();
    console.log(loaction);
    return auth ? children : <Navigate to={'/login'} state={location.pathname} replace /> //by default replace will be true
}

export default PrivateRoute
