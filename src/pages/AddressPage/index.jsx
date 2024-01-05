import { useContext } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Container, ContainerSideBar, Content, ContentForm } from "./style";
import { MdOutlineStreetview } from "react-icons/md";
import { FaCity } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import * as yup from "yup";
import { TeacherContext } from "../../providers/TeacherContext";
import Form from "../../components/Form";
export const AddressPage = () => {
  const { user, createOrUpdatedAddress } = useContext(TeacherContext);

  const inputs = [
    {
      name: "street",
      validation: () => yup.string(),
      icon: MdOutlineStreetview,
      label: "Sua Rua",
      placeholder: user.address?.street || "Rua",
      type: "text",
    },
    {
      name: "number",
      icon: AiOutlineFieldNumber,
      label: "Number",
      placeholder: user.address?.number || "Number",
      type: "text",
    },
    {
      name: "neighborhood",
      validation: () => yup.string(),
      icon: MdOutlineStreetview,
      label: "Seu bairro",
      placeholder: user.address?.neighborhood || "Bairro",
      type: "text",
    },
    {
      name: "city",
      validation: () => yup.string(),
      icon: FaCity,
      label: "Cidade",
      placeholder: user.address?.city || "Cidade",
      type: "text",
    },
    {
      name: "state",
      validation: () => yup.string(),
      icon: FaCity,
      label: "Estado",
      placeholder: user.address?.state || "Estado",
      type: "text",
    },
    {
      name: "cep",
      validation: () => yup.string(),
      icon: MdOutlineStreetview,
      label: "Seu cep",
      placeholder: user.address?.cep || "cep",
      type: "text",
    },
  ];

  const onSubmitFunction = async (data) => {
    const response = await createOrUpdatedAddress(data);
  };

  return (
    <Container>
      <Header />

      <Content>
        <ContainerSideBar>
          <Sidebar />
        </ContainerSideBar>
        <div className="coll">
          <ContentForm>
            <div className="ctn-title">
              <h2>Seu endereço atualizado!</h2>
            </div>
            <Form onSubmit={onSubmitFunction} inputs={inputs} />
          </ContentForm>
        </div>
      </Content>
    </Container>
  );
};
