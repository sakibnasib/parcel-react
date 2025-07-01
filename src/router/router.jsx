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
import Payment from "../pages/Dashbord.jsx/Payment/Payment";
import PaymentHistory from "../pages/Dashbord.jsx/PaymentHistory/PaymentHistory";
import BeRider from "../pages/Dashbord.jsx/BeRider/BeRider";
import PendingRiders from "../pages/Dashbord.jsx/PendingRiders/PendingRiders";
import ActiveRiders from "../pages/Dashbord.jsx/ActiveRiders/ActiveRiders";
import MakeAdmin from "../pages/Dashbord.jsx/MakeAdmin/MakeAdmin";
import Forbidden from "../pages/Forbidden/Forbidden";
import AdminRoute from "../routes/AdminRoute";
import AssignRider from "../pages/Dashbord.jsx/AssignRider/AssignRider";



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
        },
        {
 path: 'beARider',
 element:<PrivateRotes>
  <BeRider/>
 </PrivateRotes>,
 loader:()=>fetch('/public/warehouses.json')
        },
         {path:'forbidden',Component:Forbidden }
    ]
  },
  {path:'/',Component:AuthLayOut,
    children:[
      {path:'login',Component:Login},
      {path:'register',Component:Register},
     
    ]
  },
  {path: '/dashboard',
    element:<PrivateRotes>
<DashboardLayout/>
    </PrivateRotes>,
    children:[
      {path:'myParcels',Component:Myparcele},
      {path:'payment/:parcelId',Component:Payment},
      {path: 'paymentHistory',
        Component: PaymentHistory},
        {path:'pending-riders',
          element:<AdminRoute>
            <PendingRiders></PendingRiders>
          </AdminRoute> 
        },
        {path:'active-riders',
         element:<AdminRoute>
          <ActiveRiders/>
         </AdminRoute>
        },
        { path: 'assign-rider',element:<AdminRoute>
          <AssignRider/>
        </AdminRoute>},
        {path:'makeAdmin',element:
        <AdminRoute>
<MakeAdmin></MakeAdmin>
        </AdminRoute>
        }

    ]
  }
]);
