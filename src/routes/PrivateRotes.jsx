import React from 'react';
import Loader from '../pages/shared/Loader/Loader';
import { Navigate } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRotes = ({children}) => {
    const {user,loading}=useAuth()
    if(loading){
        return <Loader/>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRotes;