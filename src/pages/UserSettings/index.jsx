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
import { FiLock, FiMail, FiPhone } from "react-icons/fi";

const UserSettings = () => {
  const { teacher } = useContext(TeacherContext);
  const avatarUrl = useAvatarUrl(teacher);

  const [selectedDisciplines, setSelectedDisciplines] = useState([]); // Adicione o estado para disciplinas selecionadas

  const inputs = [
    {
      name: "email",
      validation: () => yup.string().required("Campo obrigatório!"),
      icon: FiMail,
      label: "email",
      placeholder: "Digite seu email",
      type: "text",
      defaultValue: teacher.email,
    },
    {
      name: "phone",
      validation: () => yup.string(),
      icon: FiPhone,
      label: "Telefone",
      placeholder: "Digite seu telefone",
      type: "tel",
      defaultValue: teacher.curriculum.celullar,
    },
  ];

  const disciplines = [
    // Exemplo de disciplinas disponíveis
    { id: "1", name: "Matemática" },
    { id: "2", name: "Português" },
    { id: "3", name: "História" },
  ];

  const onSubmitFunction = async (data) => {
    // Execute sua função de envio com os dados e disciplinas selecionadas
    console.log("Dados do formulário:", data);
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
              disciplines={disciplines} // Passe as disciplinas disponíveis
              selectedDisciplines={selectedDisciplines} // Passe as disciplinas selecionadas
              setSelectedDisciplines={setSelectedDisciplines} // Passe a função para atualizar as disciplinas selecionadas
            />
          </div>
        </ContentRow>
      </Content>
    </Container>
  );
};

export default UserSettings;
