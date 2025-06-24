import {createBrowserRouter} from "react-router";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayOut from "../pages/AuthLayOut/AuthLayOut";
import Login from "../pages/AuthLayOut/Login/Login";
import Register from "../pages/AuthLayOut/Register/Register";
import CoverAge from "../pages/Coverage/CoverAge";
import PrivateRotes from "../routes/PrivateRotes";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../pages/Layout/Dashbord";
import Myparcele from "../pages/Dashbord.jsx/Myparcele";



export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true,Component:Home},
        {path:'coverAge',element:<CoverAge></CoverAge>,
          loader:()=>fetch('/public/warehouses.json')
        },
        { path: 'sendParcel',
          element:<PrivateRotes>
            <SendParcel/>
          </PrivateRotes>,
           loader:()=>fetch('/public/warehouses.json')
        }
    ]
  },
  {path:'/',Component:AuthLayOut,
    children:[
      {path:'login',Component:Login},
      {path:'register',Component:Register}
    ]
  },
  {path: '/dashboard',
    element:<PrivateRotes>
<DashboardLayout/>
    </PrivateRotes>,
    children:[
      {path:'myParcels',Component:Myparcele}
    ]
  }
]);
