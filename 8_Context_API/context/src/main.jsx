import './index.css'
import React from "react";
import App from './App.jsx'
import ReactDOM from "react-dom/client";

import Contact from "./routes/Contact.jsx"
import Home from "./routes/Home.jsx"

// 2 - criando o provider
import { CounterContextProvider } from './context/CounterContext.jsx';

// 5 - contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom"

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
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router}/>
      </TitleColorContextProvider>      
    </CounterContextProvider>
  </React.StrictMode>
);