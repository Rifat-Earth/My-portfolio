import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
          path: '/',
          Component: Home 
        }
    ]
  },
]);

