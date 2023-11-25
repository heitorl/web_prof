import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { TeacherContext } from "../providers/TeacherContext";

export const ProtectedRoutes = () => {
  const { teacher, token } = useContext(TeacherContext);

  return <>{teacher ? <Outlet /> : <Navigate to="/" />}</>;
};

export const PublicRoutes = () => {
  const { teacher, token } = useContext(TeacherContext);

  return <>{!teacher ? <Outlet /> : <Navigate to="/dashboard" />}</>;
};
