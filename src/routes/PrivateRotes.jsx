import React from 'react';
import Loader from '../pages/shared/Loader/Loader';
import { Navigate } from 'react-router';

import { useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRotes = ({children}) => {
    const {user,loading}=useAuth()
    const location=useLocation();
     
    if(loading){
        return <Loader/>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to='/login'></Navigate>
    }
    return children
};

export default PrivateRotes;