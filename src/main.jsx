import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router";
import { router } from './router/router';
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="font-Playfair">
 <RouterProvider router={router} />
    </div>
  
  </StrictMode>,
)
