import { useContext, useState } from "react"; // Importe useState
import Header from "../../components/Header";
import useAvatarUrl from "../../utils/getAvatarForUser";
import { Container, ContentRow, Content } from "./style";
import { TeacherContext } from "../../providers/TeacherContext";
import { FaCamera, FaMapMarked } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import GoogleMapWithGeocoding from "../../components/LocationMap";
import Form from "../../components/Form";
import * as yup from "yup";
import { FiLock, FiMail, FiPhone, FiUser } from "react-icons/fi";

const UserSettings = () => {
  const { teacher, updatedSettingsInfo } = useContext(TeacherContext);
  const avatarUrl = useAvatarUrl(teacher);

  const [selectedDisciplines, setSelectedDisciplines] = useState([]);
  const inputs = [
    {
      name: "name",
      validation: () => yup.string(),
      icon: FiUser,
      label: "Nome",
      placeholder: teacher.name,
      type: "text",
    },
    {
      name: "lastName",
      validation: () => yup.string(),
      icon: FiUser,
      label: "sobrenome",
      placeholder: teacher.lastName,
      type: "text",
    },
    {
      name: "email",
      validation: () => yup.string(),
      icon: FiMail,
      label: "email",
      placeholder: teacher.email,
      type: "text",
    },
    {
      name: "phone",
      validation: () => yup.string(),
      icon: FiPhone,
      label: "Telefone",
      placeholder: teacher.curriculum?.celullar || "numero de telefone",
      type: "text",
    },
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedDisciplines(
      typeof value === "string" ? value.split(",") : value
    );
    console.log(selectedDisciplines, "checkMarks");
  };

  const onSubmitFunction = async (data) => {
    data = { ...data, selectedDisciplines };
    console.log("Dados do formulário:", data);

    await updatedSettingsInfo(data);
    console.log("Disciplinas selecionadas:", selectedDisciplines);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <div className="content-info">
          <div className="ctn-photo">
            <div className="title">
              <h3>Foto do perfil</h3>
              <FaCamera />
            </div>

            <div className="photo">
              <img src={avatarUrl} alt="avatar" />
              <FaCamera />
            </div>
          </div>

          <div className="ctn-map">
            <div className="ctn-title">
              <h3>Endereço</h3>
              <FaMapMarked />
            </div>
            <GoogleMapWithGeocoding addressData={teacher.address} />
          </div>
        </div>
        <ContentRow>
          <div className="containt-form">
            <div className="title">
              <h2>Informações gerais 🙂</h2>
            </div>
            <Form
              onSubmit={onSubmitFunction}
              inputs={inputs}
              selectedDisciplines={selectedDisciplines} // Passe as disciplinas selecionadas
              setSelectedDisciplines={setSelectedDisciplines} // Passe a função para atualizar as disciplinas selecionadas
              handleChange={handleChange}
            />
          </div>
        </ContentRow>
      </Content>
    </Container>
  );
};

export default UserSettings;
