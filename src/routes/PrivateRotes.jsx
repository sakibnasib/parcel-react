import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loader from '../pages/shared/Loader/Loader';
import { Navigate } from 'react-router';

const PrivateRotes = ({children}) => {
    const {user,loading}=useAuth();
    if(loading){
        return <Loader/>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRotes;