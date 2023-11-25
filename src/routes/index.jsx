import { Routes as RoutesReactRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StudentLogin from "../pages/Student/login";
import StudentRegister from "../pages/Student/register";
import TeacherLogin from "../pages/Teacher/login";
import TeacherRegister from "../pages/Teacher/register";
import Dashboard from "../pages/Dashboard/index";
import SearchTeacher from "../pages/SearchTeacher/index";
import Profile from "../pages/Teacher/profile";
import UserSettings from "../pages/UserSettings";
import { ProtectedRoutes, PublicRoutes } from "./route";
import { AddressPage } from "../pages/AddressPage";

const Routes = () => {
  return (
    <RoutesReactRoutes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/teacher/register" element={<TeacherRegister />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student/login" element={<StudentLogin />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchTeacher />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/address" element={<AddressPage />} />
      </Route>
    </RoutesReactRoutes>
  );
};

export default Routes;
