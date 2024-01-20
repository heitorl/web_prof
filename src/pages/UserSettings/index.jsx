import { useContext, useState } from "react"; // Importe useState
import Header from "../../components/Header";
import useAvatarUrl from "../../utils/getAvatarForUser";
import {
  Container,
  ContentRow,
  Content,
  Backdrop,
  ContainerSideBar,
} from "./style";
import { TeacherContext } from "../../providers/TeacherContext";
import { FaCamera, FaMapMarked } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";
import GoogleMapWithGeocoding from "../../components/LocationMap";
import Form from "../../components/FormSetting";
import * as yup from "yup";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";
import { useModal } from "../../utils/useModalSchema";
import { UpdateAvatarModal } from "../../components/UpdateAvatarModal";
import { MapComponnet } from "../../components/MapComponent";

const UserSettings = () => {
  const { updatedSettingsInfo, user } = useContext(TeacherContext);

  const { isModalOpen, openModal } = useModal();

  const avatarUrl = useAvatarUrl(user);

  console.log(avatarUrl, "aaava");

  const [selectedDisciplines, setSelectedDisciplines] = useState([]);
  const inputs = [
    {
      name: "name",
      validation: () => yup.string(),
      icon: FiUser,
      label: "Nome",
      placeholder: user.name,
      type: "text",
    },
    {
      name: "lastName",
      validation: () => yup.string(),
      icon: FiUser,
      label: "sobrenome",
      placeholder: user.lastName,
      type: "text",
    },
    {
      name: "email",
      validation: () => yup.string(),
      icon: FiMail,
      label: "email",
      placeholder: user.email,
      type: "text",
    },
    {
      name: "phone",
      validation: () => yup.string(),
      icon: FiPhone,
      label: "Telefone",
      placeholder: user.curriculum?.celullar || "numero de telefone",
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
  };

  const onSubmitFunction = async (data) => {
    data = { ...data, selectedDisciplines };

    await updatedSettingsInfo(data);
    console.log("Disciplinas selecionadas:", selectedDisciplines);
  };

  return (
    <Container>
      <Header />
      <Content>
        <ContainerSideBar>
          <Sidebar />
        </ContainerSideBar>
        <ContentRow>
          <div className="content-info item">
            <div className="ctn-photo">
              <div className="title">
                <h3>Foto do perfil</h3>

                <FaCamera />
              </div>

              <div className="photo">
                <img src={avatarUrl} alt="avatar" />
                <FaCamera
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                  }}
                />
              </div>
            </div>
            <div className="modal">
              {isModalOpen && <UpdateAvatarModal user={user} />}
            </div>
          </div>
          <div className="containt-form item">
            <div className="title">
              <h2>Informações gerais 🙂</h2>
            </div>
            <Form
              onSubmit={onSubmitFunction}
              inputs={inputs}
              selectedDisciplines={selectedDisciplines}
              setSelectedDisciplines={setSelectedDisciplines}
              handleChange={handleChange}
            />
          </div>
        </ContentRow>

        {isModalOpen && <Backdrop />}
      </Content>
    </Container>
  );
};

export default UserSettings;
