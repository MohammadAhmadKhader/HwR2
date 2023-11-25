import React, { useEffect, useState } from 'react';
import { RouterProvider , createBrowserRouter } from "react-router-dom";
import './App.css';
import { router } from "./layouts/routes.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
export default function App() {
  return (
    <RouterProvider router={router} />
  )
}