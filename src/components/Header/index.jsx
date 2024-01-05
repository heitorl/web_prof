import { useContext } from "react";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineMail, MdNotifications } from "react-icons/md";
import { TeacherContext } from "../../providers/TeacherContext";

import {
  Container,
  ContentLogo,
  ContentNotification,
  ContentPerfil,
  Notification,
} from "./styles";
import useAvatarUrl from "../../utils/getAvatarForUser";
import { useModal } from "../../utils/useModalSchema";
import { WidgetNotification } from "../WidgetNotification";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
export const Header = () => {
  const { user, retrieveNotifications } = useContext(TeacherContext);

  const { isModalOpen, openModal } = useModal();
  const [notifications, setNotifications] = useState([]);
  const [firstMount, setFirstMount] = useState(true);

  // useEffect(() => {
  //   retrieveNotifications()
  //     .then(({ data }) => {
  //       setNotifications(data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao recuperar notificações:", error);
  //     });
  // }, [retrieveNotifications]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await retrieveNotifications();

        setNotifications((prevNotifications) => {
          const newNotifications = data.filter(
            (notification) =>
              !prevNotifications.some((n) => n.id === notification.id)
          );

          if (firstMount && newNotifications.length > 0) {
            toast.success(
              "Você tem notificações que ainda não foram visualizadas",
              {
                icon: "🔔",
                duration: 5000,
              }
            );
            setFirstMount(false);
          } else if (newNotifications.length > 0) {
            toast.success("Você recebeu novas notificações!", {
              icon: "🔔",
              duration: 5000,
            });
          }

          return data;
        });
      } catch (error) {
        console.error("Erro ao recuperar notificações:", error);
      }
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 5000);

    return () => clearInterval(intervalId);
  }, [firstMount]);

  const avatarUrl = useAvatarUrl(user);

  return (
    <Container>
      <ContentLogo>
        <IoIosSchool />
        <span>WEB.PROF</span>
      </ContentLogo>

      <ContentNotification>
        <MdOutlineMail />
        <div className="ctn-ntf">
          <MdNotifications
            className="notification"
            onClick={(e) => {
              e.stopPropagation();

              openModal();
            }}
          />
          {notifications.length && (
            <Notification>{notifications.length}</Notification>
          )}
        </div>
        {isModalOpen && (
          <WidgetNotification
            notifications={notifications}
            setNotifications={setNotifications}
          />
        )}
      </ContentNotification>

      <ContentPerfil>
        <div className="ctn-name">
          <p>{`${user.name.charAt(0).toUpperCase() + user.name.slice(1)} ${
            user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)
          }`}</p>
          <p>{user.email}</p>
        </div>
        <div className="ctn-avatar">
          <img src={avatarUrl} alt="Avatar" />
        </div>
      </ContentPerfil>
    </Container>
  );
};

export default Header;
