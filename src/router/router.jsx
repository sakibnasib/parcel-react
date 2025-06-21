import {createBrowserRouter} from "react-router";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayOut from "../pages/AuthLayOut/AuthLayOut";
import Login from "../pages/AuthLayOut/Login/Login";
import Register from "../pages/AuthLayOut/Register/Register";
import CoverAge from "../pages/Coverage/CoverAge";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true,Component:Home},
        {path:'coverAge',element:CoverAge}
    ]
  },
  {path:'/',Component:AuthLayOut,
    children:[
      {path:'login',Component:Login},
      {path:'register',Component:Register}
    ]
  }
]);
