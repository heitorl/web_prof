// import { createContext } from "react";
// import toast from "react-hot-toast";
// import { api } from "../services/api/api";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export const StudentContext = createContext({});

// export const StudentProvider = ({ children }) => {
//   const [data, setData] = useState({});

//   const navigate = useNavigate();

//   const registerStudent = async (formData) => {
//     try {
//       await api.post("/student/register", formData);
//       toast.success("Registro bem-sucedido! Agora você pode fazer login.");
//       Navigate("/student/login");
//     } catch (error) {
//       console.log(error);
//       toast.error(
//         "Ops! Algo deu errado durante o registro. Por favor, tente novamente."
//       );
//     }
//   };

//   const loginStudent = async (formData) => {
//     try {
//       const response = await api.post("/student/login", formData);
//       console.log(response, "resss");
//       const { token, user } = response.data.message;

//       setData({ token, user });

//       localStorage.setItem("@USERID", user.id);

//       localStorage.setItem("@TOKEN", token);
//       toast.success("Login bem-sucedido! Bem-vindo ao seu painel.");

//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(
//         "Login error. Por favor check suas credenciais e tente novamente."
//       );
//       console.log(error);
//     }
//   };

//   return (
//     <TeacherContext.Provider
//       value={{
//         teacher: data.user,
//         user: data.user,
//         token: data.token,

//       }}
//       >
//         {children}
//       </TeacherContext.Provider>
//     );
// };
