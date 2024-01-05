import { Container, Content } from "./style";
import imgTeste from "../../assets/bob.jpg";
import { returnFormatedDate } from "../../utils/fomatedDate";
import { useState } from "react";
import useAvatarUrl from "../../utils/getAvatarForUser";
import { Chat } from "../Chat";
import { useEffect } from "react";
import { useContext } from "react";
import { TeacherContext } from "../../providers/TeacherContext";

export const WidgetNotification = ({ notifications, setNotifications }) => {
  const [showChat, setShowChat] = useState(false);
  const { getImageAvatar } = useContext(TeacherContext);
  const [selectedNotification, setSelectedNotification] = useState({});

  const handleCloseChat = () => {
    setShowChat(false);
  };

  const handleOpenChat = (event, notification) => {
    setSelectedNotification(notification);

    setShowChat(true);
    event.stopPropagation();
  };

  const senderSelectedUser =
    selectedNotification.senderUser || selectedNotification.senderTeacher;

  const selectedUserAvatarUrl = useAvatarUrl(senderSelectedUser);

  useEffect(() => {
    const fetchAvatarUrls = async () => {
      try {
        const updatedNotifications = await Promise.all(
          notifications.map(async (notification) => {
            const senderNotification =
              notification.senderStudent || notification.senderTeacher;

            const { avatarPath } = await getImageAvatar(senderNotification);

            if (notification.senderTeacher) {
              return {
                ...notification,
                senderTeacher: {
                  ...notification.senderTeacher,
                  avatar: avatarPath,
                },
              };
            } else {
              return {
                ...notification,
                senderTeacher: {
                  ...notification.senderStudent,
                  avatar: avatarPath,
                },
              };
            }
          })
        );

        setNotifications(updatedNotifications);
      } catch (error) {
        console.error("Erro ao buscar URLs dos avatares:", error);
      }
    };

    fetchAvatarUrls();
  }, [notifications]);

  return (
    <Container>
      <div className="ctn-title">
        <span>Notificações</span>
      </div>
      <div className="static"></div>
      <Content>
        {notifications &&
          notifications.map((notification) => (
            <div
              className="ctn-notification"
              key={notification.id}
              onClick={(event) => handleOpenChat(event, notification)}
            >
              <div className="ctn-img">
                <img src={notification.senderTeacher.avatar} alt="imagem" />
              </div>
              <div className="ctn-content">
                <span
                  className="destaque-texto"
                  data-name={`${notification.senderTeacher.name}:`}
                >
                  {notification.content}
                </span>

                <div className="info">
                  <div className="circle"></div>

                  <span>{returnFormatedDate(notification.createdAt)}</span>
                </div>
              </div>
            </div>
          ))}
      </Content>

      {showChat && (
        <Chat
          onClose={handleCloseChat}
          avatarUrl={selectedUserAvatarUrl}
          teacher={senderSelectedUser}
        />
      )}
    </Container>
  );
};
