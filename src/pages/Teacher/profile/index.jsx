import Header from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { Container, Content } from "./style";
import { useContext, useState, useEffect } from "react";
import { TeacherContext } from "../../../providers/TeacherContext";
import { MdOutlineStarPurple500, MdMessage } from "react-icons/md";
import Button from "../../../components/Button";
import EditDescription from "../../../components/DialogDescription";
import { Chat } from "../../../components/Chat";
import useAvatarUrl from "../../../utils/getAvatarForUser";

const Profile = () => {
  const { valueFind, teacher } = useContext(TeacherContext);

  console.log(teacher);

  const [showChat, setShowChat] = useState(false);

  const avatarUrl = useAvatarUrl(teacher);

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
  };

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <div className="main">
          <div className="editor">
            <EditDescription />
          </div>
          <div className="box-resume">
            <span>{teacher.curriculum?.resume}</span>
          </div>
        </div>
        <div className="ctn-profile">
          <div className="ctn-description">
            <div className="ctn-img">
              <img src={avatarUrl} alt="teacher" />
              <p>
                {teacher?.name} {teacher?.lastName}
              </p>
              <div className="star">
                <MdOutlineStarPurple500 />
                <span>5.0 (x avaliações)</span>
              </div>
              <div className="info-price">
                <div>
                  <span>Preço hora/aula</span>
                  <span>R$90</span>
                </div>
                <div>
                  <span>Número de alunos</span>
                  <span>12</span>
                </div>
              </div>
              <div className="ctn-button">
                <Button onClick={handleOpenChat}>
                  <MdMessage /> Contatar
                </Button>
              </div>
            </div>
          </div>
          {showChat && (
            <Chat
              onClose={handleCloseChat}
              avatarUrl={avatarUrl}
              valueFind={valueFind}
            />
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Profile;
