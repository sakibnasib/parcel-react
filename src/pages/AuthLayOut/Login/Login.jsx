import React from 'react';
import { useForm } from 'react-hook-form';
import GoogleLogo from '../../shared/GoogleLogo';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {register, handleSubmit,formState:{errors}}=useForm();
    const {signInUser}=useAuth();
    const location=useLocation();
    const navigate=useNavigate()
    const from=location?.state?.form || '/' 
    const onSubmit=data=>{
signInUser(data.email,data.password)
.then(res=>{
    console.log(res)
navigate(from)
}).catch(error=>{
    console.error(error)
})
    }
    return (
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={ handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"{...register('email')} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6})} className="input" placeholder="Password" />
           {errors.password?.type=== "required" && (
        <p role="alert" className='text-red-600'>Password name is required</p>
      )}
       {errors.password?.type=== "minLength" && (
        <p role="alert" className='text-red-600'>Password MinLength 6</p>
      )}
          <div><p className="link link-hover">Don’t have any account? <Link to='/register'className='text-[#CAEB66]'>Register</Link></p></div>
        </fieldset>
         <button type='submit' className="btn bg-[#CAEB66] text-black w-full  mt-4">Login</button>
         <div className="divider">Or</div>
            </form>
            <div className="">
            {/* Google */}
<GoogleLogo></GoogleLogo>
         </div>
        </div>
        </div>
    );
};

export default Login;