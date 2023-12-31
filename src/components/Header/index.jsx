import { useContext } from "react";
import { IoIosSchool } from "react-icons/io";
import { MdOutlineMail, MdNotifications } from "react-icons/md";
import { TeacherContext } from "../../providers/TeacherContext";

import {
  Container,
  ContentLogo,
  ContentNotification,
  ContentPerfil,
} from "./styles";
import useAvatarUrl from "../../utils/getAvatarForUser";

export const Header = () => {
  // const { getImageAvatar } = useContext(TeacherContext);

  const { user } = useContext(TeacherContext);

  // const [anchorElUser, setAnchorElUser] = useState(null);
  // const [teacherData, setTeacherData] = useState(null);

  const avatarUrl = useAvatarUrl(user);

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
