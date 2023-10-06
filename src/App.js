import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import HomePage from "./pages/HomePage";
import Aktualnosci from "./pages/Aktualnosci";
import Admin from "./pages/Admin";
import Nabozenstwa from "./pages/Nabozenstwa";
import AccountDashboard from "./pages/AccountDashboard";
import Fundusze from "./pages/Fundusze";
import CreatePost from "./pages/CreatePost";

// Components
import ProtectedRoutes from "./components/ProtectedRoutes";
import {AuthContextProvider} from "./context/AuthContext";

export default function App() {

    const router = createBrowserRouter([
      { path: '/', element: <HomePage /> },
      { path: '/nabozenstwa', element: <Nabozenstwa /> },
      { path: '/aktualnosci', element: <Aktualnosci /> },
      { path: '/fundusze', element: <Fundusze /> },
      { path: '/admin', element: <Admin />},
      { path: '/dashboard', element: <ProtectedRoutes><AccountDashboard /></ProtectedRoutes> },
      { path: '/create-news', element: <ProtectedRoutes><CreatePost /></ProtectedRoutes>}
    ]);

    return (
      <AuthContextProvider>
        <RouterProvider router={ router } />
      </AuthContextProvider>
    );
}
