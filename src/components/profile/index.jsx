import { StandardMessagePerfil } from "../StandardMessagePerfil";
import { Container } from "./style";
import Button from "../Button";
import { MdMessage, MdOutlineStarPurple500 } from "react-icons/md";
import useAvatarUrl from "../../utils/getAvatarForUser";
import { useContext, useState } from "react";
import { Chat } from "../Chat";
import { TeacherContext } from "../../providers/TeacherContext";

export const Profile = ({ teacher }) => {
  const [showChat, setShowChat] = useState(false);
  const { valueFind } = useContext(TeacherContext);

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
  };
  const avatarUrl = useAvatarUrl(teacher);

  return (
    <Container>
      <div className="main">
        <div className="box-resume">
          <StandardMessagePerfil user={teacher} />
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
        </div>
        {showChat && (
          <Chat
            onClose={handleCloseChat}
            avatarUrl={avatarUrl}
            teacher={teacher}
          />
        )}
      </div>
    </Container>
  );
};
