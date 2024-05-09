import React from "react";
import ReactDOM  from 'react-dom';
import './index.css'
import App from './App';
import { RouterProvider, createBrowserRouter, useLocation } from "react-router-dom";
import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

const router = createBrowserRouter([
    {
        path: '/securex',
        element: <App/>
    },
    {
        path: '/securex/signup',
        element: <Signup/>
    },
    {
        path: '/securex/*',
        element: <div>404 Not Found</div>
    
    }
]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
);
