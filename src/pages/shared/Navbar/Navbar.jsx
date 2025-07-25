import React from 'react';
import { NavLink } from 'react-router';
import ProFastLogo from '../ProFast/ProFastLogo';
import useAuth from '../../../hooks/useAuth';


const Navbar = () => {
  const {user,logOut}=useAuth();
    const navitems=<>
    <li><NavLink to=''>Home</NavLink></li>
      <li><NavLink to='/coverAge'>CoverAge</NavLink></li>
       <li><NavLink to="/sendParcel">Send A Parcel</NavLink></li>
       {
            user && <>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </>
        }
         <li><NavLink to="/beARider">Be a Rider</NavLink></li>
      <li><NavLink to='aboutus'>AbotUs</NavLink></li>
         
    </>
    const handleLogOut=()=>{
      logOut()
      .then(res=>{
        console.log(res)
      }).catch(error=>{
        console.error(error)
      })
    }
    return (
       <div className="navbar bg-base-100 shadow-sm rounded-3xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {navitems}
      </ul>
    </div>
    <p className="btn btn-ghost text-xl"><ProFastLogo></ProFastLogo></p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navitems}
    </ul>
  </div>
  <div className="navbar-end">
    {user ? <>
    <button onClick={handleLogOut} className='btn' >Logout</button>
    </>:<> <NavLink className='btn' to='/login'>
   Login
  </NavLink>
  <NavLink className='btn ml-2' to='/register'>
    Register
  </NavLink></>}
 
  </div>
</div>
    );
};

export default Navbar;