import React from 'react';
import ProFastLogo from '../ProFast/ProFastLogo';
import { Link } from 'react-router';
import { FaFacebook, FaGithubSquare, FaInstagram } from "react-icons/fa";
const Fotter = () => {
    return (
       <footer className="footer footer-horizontal footer-center  rounded-3xl bg-neutral text-neutral-content p-10">
  <aside>
   <ProFastLogo></ProFastLogo>
    <p className="font-bold">
      ACME Industries Ltd.
      <br />
      Providing reliable tech since 1992
    </p>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link>
<FaFacebook size={30} color='blue' />
      </Link>
      <Link>
      <FaInstagram size={30} color='red'/>
      </Link>
      <Link>
      <FaGithubSquare size={30} color='blue'/>
      </Link>
    </div>
  </nav>
</footer>
    );
};

export default Fotter;