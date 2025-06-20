import {createBrowserRouter} from "react-router";
import MainLayout from "../pages/Layout/MainLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true,Component:Home}
    ]
  },
]);
