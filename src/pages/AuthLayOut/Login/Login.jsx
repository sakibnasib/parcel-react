import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit,formState:{errors}}=useForm()
    const onSubmit=data=>console.log(data)
    return (
        <div>
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
          <div><a className="link link-hover">Forgot password?</a></div>
        </fieldset>
         <button type='submit' className="btn btn-neutral mt-4">Login</button>
            </form>
        </div>
    );
};

export default Login;