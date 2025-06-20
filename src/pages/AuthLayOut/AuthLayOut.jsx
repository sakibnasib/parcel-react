import React from 'react';
import { Outlet } from 'react-router';
import AuthImg from '../../assets/authimage.png'
import ProFastLogo from '../shared/ProFast/ProFastLogo';
const AuthLayOut = () => {
    return (
        <div className="md:p-12 bg-base-200 p-5">
            <div className="">
                <ProFastLogo></ProFastLogo>
            </div>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="flex-1">
        <img
      src={AuthImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    <div className="flex-1">
     <Outlet></Outlet>
    </div>
  </div>
</div>
    );
};

export default AuthLayOut;