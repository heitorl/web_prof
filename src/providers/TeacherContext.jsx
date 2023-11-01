import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../services/api/api";
import { useEffect } from "react";

export const TeacherContext = createContext({
  getImageAvatar: async (user) => {},
  user: null,
});

export const TeacherProvider = ({ children }) => {
  const navigate = useNavigate();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@TOKEN");
    const user = localStorage.getItem("@WebProf:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const registerTeacher = async (formData) => {
    try {
      await api.post("/teacher/register", formData);
      //futuro toast
      navigate("/teacher/login");
    } catch (error) {
      console.log(error);
    }
  };

  const loginTeacher = async (formData) => {
    try {
      const response = await api.post("/teacher/login", formData);

      const { token, user } = response.data.message;

      setData({ token, user });

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@WebProf:user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const findAllTeacher = async () => {
    try {
      const { data } = await api.get("/teacher/search");

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const selectObject = (object) => {
    setSelectedObject(object);
  };

  // Obtém o valor inicial da propriedade selectedObject do localStorage
  const storedSelectedObject = localStorage.getItem("selectedObject");
  const initialSelectedObject = storedSelectedObject
    ? JSON.parse(storedSelectedObject)
    : {};

  const [selectedObject, setSelectedObject] = useState(
    initialSelectedObject && typeof initialSelectedObject === "object"
      ? initialSelectedObject
      : {}
  );

  // Salva o selectedObject no localStorage sempre que ele for atualizado
  useEffect(() => {
    localStorage.setItem("selectedObject", JSON.stringify(selectedObject));
  }, [selectedObject]);

  const valueFind = {
    selectedObject,
    setSelectedObject,
    selectObject,
  };

  const teacherLogout = () => {
    setData(null);
    localStorage.clear();
    navigate("/");
  };

  const getImageAvatar = async (user) => {
    try {
      if (!user.avatar) return;
      const { data } = await axios.get(
        `http://localhost:3000/teacher/imagem/avatar`,
        {
          responseType: "blob",
          // headers: {
          //   "Authorization": `Bearer ${token}`,
          // },
          params: {
            id: user.id,
          },
        }
      );

      const blobUrl = URL.createObjectURL(data);

      return blobUrl;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  // const editResumeFromCurriculum = async (token, resumeData) => {
  //   try {
  //     const { data } = await axios.patch(
  //       `http://localhost:3000/teacher/register/curriculum`,
  //       resumeData,
  //       {
  //         headers: {
  //           "Authorization": `Bearer ${token}`,
  //         },
  //       }
  //     );

  //   return data;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }

  return (
    <TeacherContext.Provider
      value={{
        teacher: data.user,
        token: data.token,
        registerTeacher,
        loginTeacher,
        teacherLogout,
        valueFind,
        findAllTeacher,
        getImageAvatar,
        // editResumeFromCurriculum
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};