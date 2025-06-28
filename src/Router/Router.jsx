import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import RootLayout from "../Layouts/RootLayout"
import Projects from "../Pages/Projects/Projects";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
]);
export default Router;
