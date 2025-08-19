import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layoutes/Main";
import Home from "../pages/Home";
import '../layoutes/Main.css'
import OurMenu from "../pages/ourMenu/OurMenuPage";
import OurShop from "../pages/ourShop/OurShop";
import ContactUs from "../pages/contactUs/ContactUs";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/Our_menu',
          element:<OurMenu/>
        },
        {
          path:'/Our_shop',
          element:<OurShop/>
        },
        {
          path:'/Contact_us',
          element:<ContactUs/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        }
      ]
    },
  ]);