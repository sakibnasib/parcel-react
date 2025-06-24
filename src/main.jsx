import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router";
import { router } from './router/router';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'leaflet/dist/leaflet.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './Contex/AuthContext/AuthProvider';
AOS.init();
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="font-Playfair w-11/12 mx-auto">
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
 
    </div>
  
  </StrictMode>,
)
