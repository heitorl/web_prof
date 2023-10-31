// import React, { useContext } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { TeacherContext } from "../providers/TeacherContext";

// const ProtectedRoutes = () => {
//   const { token } = useContext(TeacherContext)
//   console.log(token, '---')
//   const navigate = useNavigate()
//   console.log(token, '===')
//   return (
//     <>
//       {token ? <Outlet /> : navigate("/") }
    
//     </>
//   )
// }

// export default ProtectedRoutes