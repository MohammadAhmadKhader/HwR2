import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Layout from './../layouts/Layout';
import Home from './../components/web/home/Home';
import Categories from './../components/web/categories/Categories';
import DashboardLayout from './../layouts/DashboardLayout';
import DashboardHome from "./../components/dashboard/home/Home.jsx"
import DashboardCategories from "./../components/dashboard/categories/Categories.jsx"
import Register from '../components/web/register/Register';


export const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"register",
        element:<Register />,
      },
      {
        path:"home",
        element:<Home />,
      },
      {
        path:"categories",
        element:<Categories />,
      },{
        path:"*",
        element:<h2>Error : 404 Page Not Founded ---Web </h2>,
      }
    ]
  },
  {
    path:"/dashboard",
    element:<DashboardLayout />,
    children:[
      {
        path:"home",
        element:<DashboardHome />,
      },
      {
        path:"categories",
        element:<DashboardCategories />,
      },{
        path:"*",
        element:<h2>Error : 404 Page Not Founded ---Dashboard mode</h2>,
      }
    ]
  },
]);
  