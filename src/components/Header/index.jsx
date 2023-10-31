import { useEffect } from "react";
import { useState, useContext } from "react";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineMail, MdNotifications } from "react-icons/md";
import { TeacherContext } from "../../providers/TeacherContext";
import userNull from "../../assets/usernull.jpg";

import {
  Container,
  ContentLogo,
  ContentNotification,
  ContentPerfil,
} from "./styles";
import { FaUser } from "react-icons/fa";
import useAvatarUrl from "../../utils/getAvatarForUser";

export const Header = () => {
  // const { getImageAvatar } = useContext(TeacherContext);

  const { teacher } = useContext(TeacherContext);

  // const [anchorElUser, setAnchorElUser] = useState(null);
  // const [teacherData, setTeacherData] = useState(null);

  const avatarUrl = useAvatarUrl(teacher);

  // useEffect(() => {
  //   const user = localStorage.getItem("@WebProf:user");
  //   if (user) {
  //     setTeacherData(JSON.parse(user));
  //   }
  // }, []);

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  return (
    <Container>
      <ContentLogo>
        <IoIosSchool />
        <span>WEB.PROF</span>
      </ContentLogo>

      <ContentNotification>
        <MdOutlineMail />
        <MdNotifications />
      </ContentNotification>

      <ContentPerfil>
        <div className="ctn-name">
          <p>{`${
            teacher.name.charAt(0).toUpperCase() + teacher.name.slice(1)
          } ${
            teacher.lastName.charAt(0).toUpperCase() + teacher.lastName.slice(1)
          }`}</p>
          <p>{teacher.email}</p>
        </div>
        <div className="ctn-avatar" onClick="">
          <img src={avatarUrl} alt="Avatar" />
        </div>
      </ContentPerfil>
    </Container>
  );
};

export default Header;
