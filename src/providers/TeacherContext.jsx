import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../services/api/api";
import { useEffect } from "react";
import toast from "react-hot-toast";
import useAvatarUrl from "../utils/getAvatarForUser";

export const TeacherContext = createContext({
  getImageAvatar: async (user) => {},
  user: null,
});

export const TeacherProvider = ({ children }) => {
  const [data, setData] = useState({});

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [imageUploaded, setImageUploaded] = useState({});

  const pathname = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");

    const autoLoginUser = async () => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 500));

        const response = await api.get(`/getUser/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setData((prevData) => ({
          token: token,
          user: response.data,
        }));

        navigate(pathname);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    autoLoginUser();
  }, []);

  const registerUser = async (formData, userType) => {
    try {
      await api.post(`/${userType}/register`, formData);
      toast.success("Registro bem-sucedido! Agora você pode fazer login.");
      navigate(`/${userType}/login`);
    } catch (error) {
      console.log(error);
      toast.error(
        "Ops! Algo deu errado durante o registro. Por favor, tente novamente."
      );
    }
  };

  const loginUser = async (formData, userType) => {
    try {
      const response = await api.post(`/${userType}/login`, formData);

      const { token, user } = response.data.message;

      setData({ token, user });

      localStorage.setItem("@USERID", user.id);

      localStorage.setItem("@TOKEN", token);
      toast.success("Login bem-sucedido! Bem-vindo ao seu painel.");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        "Login error. Por favor check suas credenciais e tente novamente."
      );
      console.log(error);
    }
  };

  const findAllTeacher = async () => {
    try {
      const response = await api.get("/student/search", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      return response;
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
    toast.success("Logout bem-sucedido. Até a próxima!");
    navigate("/");
    window.location.reload();
  };

  const updatedSettingsInfo = async (formData) => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/teacher/updatedInfo",
        formData,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      setData((prevData) => ({
        ...prevData,
        user: {
          ...prevData.user,
          ...response.data,
        },
      }));
      toast.success("Suas informações foram atualizadas! ", {
        icon: "🛠️",
      });
    } catch (error) {
      toast.error("Opa! Algo deu errado. Tente novamente.");
      console.error(error);
      return null;
    }
  };

  const getImageAvatar = async (user) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/teacher/imagem/avatar`,
        {
          // headers: {
          //   "Authorization": `Bearer ${token}`,
          // },
          params: {
            id: user.id,
          },
        }
      );

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const retrieveMessages = async (selectUser) => {
    try {
      const response = await api.get(`/messages/${selectUser.id}`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const updateFile = (data) => {
    setImageUploaded((prevData) => ({ ...prevData, ...data }));
  };

  const requestAvatarUpload = async (file) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await api.patch("teacher/avatar", file, {
        onUploadProgress: (event) => {
          const progress = parseInt(
            Math.round((event.loaded * 100) / event.total)
          );
          updateFile({ progress });
        },
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
        responseType: "blob",
      });

      if (response.data instanceof Blob) {
        const blobUrl = URL.createObjectURL(response.data);

        updateFile({
          uploaded: true,
          url: blobUrl,
        });
      } else {
        toast.error("A resposta não contém dados de imagem válidos.");
        updateFile({
          error: true,
        });
      }
    } catch (error) {
      toast.error(
        "Opa! Algo deu errado com o upload do avatar. Tente novamente."
      );
      updateFile({
        error: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const createOrUpdatedAddress = async (formData) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const response = await axios.patch(
        "http://localhost:3000/address",
        formData,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );

      setData((prevData) => {
        const updatedUser = {
          ...prevData.user,
          address: {
            ...prevData.user.address,
            ...response.data,
          },
        };

        const updatedData = {
          ...prevData,
          user: updatedUser,
        };

        toast.success("Suas informações foram atualizadas! ", {
          icon: "🛠️",
        });

        return updatedData;
      });
    } catch (error) {
      toast.error("Opa! Algo deu errado. Tente novamente.");
      console.error(error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const retrieveNotifications = async () => {
    try {
      const response = await axios.get("http://localhost:3000/notification", {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      return response;
    } catch (err) {
      console.error(err);
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
        user: data.user,
        token: data.token,
        loading,
        registerUser,
        loginUser,
        teacherLogout,
        valueFind,
        findAllTeacher,
        getImageAvatar,
        updatedSettingsInfo,
        imageUploaded,
        setImageUploaded,
        requestAvatarUpload,
        createOrUpdatedAddress,
        retrieveNotifications,
        retrieveMessages,

        // editResumeFromCurriculum
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};
