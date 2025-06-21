import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import GoogleLogo from '../../shared/GoogleLogo';
import { Link } from 'react-router';

const Register = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {creatUser}=useAuth();
    
    const onSubmit=data=>{
// console.log(data);
creatUser(data.email,data.password)
.then(res=>{
  console.log(res)
}).catch((error) =>{
  console.error(error)
})
    };

    return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
          <h1 className="text-3xl text-center font-bold">Create an Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
 <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"{...register('email',{required:true})} className="input" placeholder="Email" />
          {errors.email?.type==='required'&&<p className='text-red-500'>Email is Required</p>}
          <label className="label">Password</label>
          <input type="password"{...register('password',{required:true,minLength:6})} className="input" placeholder="Password" />
{errors.password?.type==='required'&&<p className='text-red-500'>Password is Required</p>}
{errors.password?.type==='minLength'&& <p  className='text-red-500'>Password must be 6 digith</p>}

          <div><p  className="link link-hover">Already have an account? <Link to='/login' className='text-[#CAEB66]'>Login</Link></p></div>
          <button type='submit' className="btn bg-[#CAEB66] text-black mt-4">Register</button>
        </fieldset>
          </form>
           <div class="divider">Or</div>
          <div className="">
            {/* Google */}
<GoogleLogo></GoogleLogo>
         </div>
      </div>
    </div>
 

    );
};

export default Register;