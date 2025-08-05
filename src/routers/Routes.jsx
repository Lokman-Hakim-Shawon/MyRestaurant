import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home";
import '../layoutes/Main.css'
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      ]
    },
  ]);