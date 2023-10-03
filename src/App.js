import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from "./pages/HomePage";
import Aktualnosci from "./pages/Aktualnosci";
import Historia from "./pages/Historia";
import Admin from "./pages/Admin";
import Nabozenstwa from "./pages/Nabozenstwa";
import AccountDashboard from "./pages/AccountDashboard";
import {AuthContextProviderd} from "./context/AuthContext";

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/nabozenstwa', element: <Nabozenstwa /> },
  { path: '/aktualnosci', element: <Aktualnosci /> },
  { path: '/historia', element: <Historia /> },
  { path: '/admin', element: <Admin /> },
  { path: '/dashboard', element: <AccountDashboard /> }
]);

export default function App() {
    return (
      <AuthContextProviderd>
        <RouterProvider router={ router } />
      </AuthContextProviderd>
    );
}
