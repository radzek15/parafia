import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";

export default function ProtectedRoutes({children}) {
	const { user } = UserAuth();

  return (
    <Routes>
      <Route
        path="/*"
        element={user ? children : <Navigate to="/" replace />}
      />
    </Routes>
  );
};