import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { signInWithEmailAndPassword, signInWithPopup,createUserWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../Firebase/Firebaseinit';
const provider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    
    const creatUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
   const signInUser =(email,password)=>{
     setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   };

   const goggle=()=>{
    return signInWithPopup(auth,provider)
   }
const logOut=()=>{
    return signOut(auth)
}


useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])

    const authInfo={
creatUser,
signInUser,
user,
loading,
setLoading,
logOut,
goggle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;