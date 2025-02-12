import './index.css'
import React from "react";
import App from './App.jsx'
import ReactDOM from "react-dom/client";

import Contact from "./routes/Contact.jsx"
import Home from "./routes/Home.jsx"

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom"

import HookUseContext from './components/HookUseContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HookUseContext>
      <RouterProvider router={router}/>
    </HookUseContext>
  </React.StrictMode>
);